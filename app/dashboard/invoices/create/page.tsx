import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoices',
};

interface CreateInvoiceProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({}: CreateInvoiceProps) {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: 'Invoices', href: '/dashboard/invoices'},
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers}/>
    </main>
  );
}
