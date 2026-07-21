'use client';

import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/DataTable';
import { Container } from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

type Metric = {
  region: string;
  uptime: string;
  latency: string;
  activeDeployments: number;
  status: 'Operational' | 'Degraded' | 'Maintenance';
};

const columns: ColumnDef<Metric>[] = [
  {
    accessorKey: 'region',
    header: 'Region',
  },
  {
    accessorKey: 'uptime',
    header: 'Uptime (30d)',
  },
  {
    accessorKey: 'latency',
    header: 'Avg. Latency',
  },
  {
    accessorKey: 'activeDeployments',
    header: 'Deployments',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              status === 'Operational'
                ? 'bg-[#F1FEC8]'
                : status === 'Degraded'
                ? 'bg-yellow-400'
                : 'bg-red-400'
            }`}
          />
          <span className="text-stone-300 font-medium">{status}</span>
        </div>
      );
    },
  },
];

const metricsData: Metric[] = [
  { region: 'ap-south-1 (Mumbai)', uptime: '99.99%', latency: '12ms', activeDeployments: 412, status: 'Operational' },
  { region: 'ap-southeast-1 (Singapore)', uptime: '99.98%', latency: '24ms', activeDeployments: 204, status: 'Operational' },
  { region: 'eu-central-1 (Frankfurt)', uptime: '99.95%', latency: '85ms', activeDeployments: 89, status: 'Operational' },
  { region: 'us-east-1 (N. Virginia)', uptime: '99.99%', latency: '110ms', activeDeployments: 531, status: 'Operational' },
  { region: 'ap-northeast-1 (Tokyo)', uptime: '99.90%', latency: '45ms', activeDeployments: 120, status: 'Degraded' },
];

export default function MetricsTableSection() {
  return (
    <section className="py-24 bg-background relative border-b border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Global Infrastructure"
          heading="Enterprise-Grade Reliability"
          description="Real-time operational metrics across our globally distributed cloud architecture. Built for resilience and sub-millisecond precision."
          align="left"
        />
        
        <div className="mt-12">
          <DataTable
            columns={columns}
            data={metricsData}
            searchKey="region"
            placeholder="Search by region..."
          />
        </div>
      </Container>
    </section>
  );
}
