'use client';

import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const Certificate = dynamic(() => import('@/components/certificate'), {
  loading: () => <Loading />,
});

export default function CertificationsPage() {
  return <Certificate />;
}
