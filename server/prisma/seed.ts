import { PrismaClient, Role, GeneralStatus, CaseStatus, CasePriority, AppointmentType, AppointmentStatus, InvoiceStatus, PaymentMethod, PaymentStatus } from '@prisma/client';
import { encrypt } from '../src/lib/crypto';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');
  
  // Clean up existing data (optional, but good for testing)
  // Be careful with this in production!
  await prisma.payment.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.case.deleteMany();
  await prisma.practiceArea.deleteMany();
  await prisma.clientProfile.deleteMany();
  await prisma.lawyerProfile.deleteMany();
  await prisma.user.deleteMany();

  // Create a reversible password for seed users
  const passwordStr = 'Password123!';
  const passwordHash = encrypt(passwordStr);

  // 1. Create Users for every Role
  console.log('👤 Creating users...');
  
  const superAdmin = await prisma.user.create({
    data: {
      email: 'superadmin@araththaai.fyi',
      password: passwordHash,
      firstName: 'System',
      lastName: 'Admin',
      role: Role.SUPER_ADMIN,
    }
  });

  const admin = await prisma.user.create({
    data: {
      email: 'admin@araththaai.fyi',
      password: passwordHash,
      firstName: 'Alice',
      lastName: 'Manager',
      role: Role.ADMIN,
    }
  });

  const seniorLawyer = await prisma.user.create({
    data: {
      email: 'seniorlawyer@araththaai.fyi',
      password: passwordHash,
      firstName: 'Robert',
      lastName: 'Kavanagh',
      role: Role.SENIOR_LAWYER,
      lawyerProfile: {
        create: {
          specialization: 'Corporate Litigation',
          barNumber: 'BAR-78901',
          experience: 15,
        }
      }
    }
  });

  const juniorLawyer = await prisma.user.create({
    data: {
      email: 'juniorlawyer@araththaai.fyi',
      password: passwordHash,
      firstName: 'Sarah',
      lastName: 'Jenkins',
      role: Role.JUNIOR_LAWYER,
      lawyerProfile: {
        create: {
          specialization: 'Family Law',
          barNumber: 'BAR-12345',
          experience: 3,
        }
      }
    }
  });

  const client = await prisma.user.create({
    data: {
      email: 'client@araththaai.fyi',
      password: passwordHash,
      firstName: 'John',
      lastName: 'Doe',
      role: Role.CLIENT,
      phone: '+15550123456',
      clientProfile: {
        create: {
          companyName: 'Doe Enterprises',
          taxId: 'TAX-998877',
          billingAddress: '123 Client St, Business City'
        }
      }
    }
  });

  // 2. Create Practice Areas
  console.log('⚖️ Creating practice areas...');
  const corpLaw = await prisma.practiceArea.create({
    data: {
      title: 'Corporate Law',
      slug: 'corporate-law',
      description: 'Comprehensive corporate legal services including M&A, restructuring, and compliance.',
      icon: 'Briefcase'
    }
  });

  const famLaw = await prisma.practiceArea.create({
    data: {
      title: 'Family Law',
      slug: 'family-law',
      description: 'Sensitive and professional handling of family disputes, divorce, and custody.',
      icon: 'Users'
    }
  });

  // 3. Create Cases
  console.log('📁 Creating cases...');
  const case1 = await prisma.case.create({
    data: {
      caseNumber: 'CAS-2023-001',
      title: 'Doe Enterprises Merger Acquisition',
      description: 'Handling the legal requirements for acquiring TechStart Inc.',
      status: CaseStatus.IN_PROGRESS,
      priority: CasePriority.HIGH,
      practiceAreaId: corpLaw.id,
      clientId: client.id,
      lawyerId: seniorLawyer.id,
    }
  });

  const case2 = await prisma.case.create({
    data: {
      caseNumber: 'CAS-2023-002',
      title: 'Property Dispute Resolution',
      description: 'Resolving boundary disputes for commercial real estate.',
      status: CaseStatus.OPEN,
      priority: CasePriority.MEDIUM,
      practiceAreaId: corpLaw.id,
      clientId: client.id,
      lawyerId: juniorLawyer.id,
    }
  });

  // 4. Create Appointments
  console.log('📅 Creating appointments...');
  await prisma.appointment.create({
    data: {
      title: 'Initial M&A Strategy Meeting',
      type: AppointmentType.ONLINE,
      status: AppointmentStatus.CONFIRMED,
      date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
      duration: 60,
      clientId: client.id,
      lawyerId: seniorLawyer.id,
      caseId: case1.id,
      meetingLink: 'https://zoom.us/j/123456789'
    }
  });

  await prisma.appointment.create({
    data: {
      title: 'Document Review',
      type: AppointmentType.OFFLINE,
      status: AppointmentStatus.REQUESTED,
      date: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), // Day after tomorrow
      duration: 30,
      clientId: client.id,
      lawyerId: juniorLawyer.id,
      caseId: case2.id,
    }
  });

  // 5. Create Invoices
  console.log('💰 Creating invoices...');
  await prisma.invoice.create({
    data: {
      invoiceNo: 'INV-2023-1001',
      amount: 5000.00,
      tax: 500.00,
      total: 5500.00,
      status: InvoiceStatus.SENT,
      dueDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      clientId: client.id,
      caseId: case1.id,
    }
  });

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
