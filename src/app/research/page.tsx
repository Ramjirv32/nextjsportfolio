'use client';

import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const ResearchPublications = dynamic(() => import('@/components/Research'), {
  loading: () => <Loading />,
});

export default function ResearchPage() {
  return <ResearchPublications />;
}
