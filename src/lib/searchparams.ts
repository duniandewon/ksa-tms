import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum
} from 'nuqs/server';

import { Status } from '@/types';

export const searchParams = {
  page: parseAsInteger.withDefault(0),
  limit: parseAsInteger.withDefault(10),
  q: parseAsString,
  gender: parseAsString,
  status: parseAsStringEnum<Status>(['alumni', 'ba-calon', 'calon', 'jamaah']),
  paket: parseAsString,
  paymentStatus: parseAsString,
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);