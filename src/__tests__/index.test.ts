import { join } from 'path';

import { getInstaller, getInstallerSync } from '..';

const fixtures = (...paths: string[]) =>
  join(__dirname, '__fixtures__', ...paths);

test('getInstallerSync', () => {
  expect(getInstallerSync(fixtures('yarn'))).toBe('yarn');
  expect(getInstallerSync(fixtures('pnpm'))).toBe('pnpm');
  expect(getInstallerSync(fixtures('default'))).toBe('npm');
});

test('getInstaller', async () => {
  await expect(getInstaller(fixtures('yarn'))).resolves.toBe('yarn');
  await expect(getInstaller(fixtures('pnpm'))).resolves.toBe('pnpm');
  await expect(getInstaller(fixtures('default'))).resolves.toBe('npm');
});
