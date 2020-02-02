import { useState } from 'react';

export function useUserStore() {
  return useState({ name: 'Luke' });
}
