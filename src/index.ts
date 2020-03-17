import { accessSync, promises } from 'fs';
import { resolve } from 'path';

const { access } = promises;

/**
 * Synchronously check that the file exists.
 */
const fileExistsSync = (filePath: string) => {
  try {
    accessSync(filePath);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check that the file exists.
 */
const fileExists = async (filePath: string) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

/**
 * An object containing the returned `InstallerType` values.
 */
export const Installer = {
  PNPM: 'pnpm',
  YARN: 'yarn',
  NPM: 'npm',
} as const;

/**
 * The available installer available as a type.
 */
export type InstallerType = typeof Installer[keyof typeof Installer];

/**
 * Get the installer for the provided folder, synchronously.
 *
 * @param rootDirectory - the root directory to use
 */
export function getInstallerSync(rootDirectory: string): InstallerType {
  if (fileExistsSync(resolve(rootDirectory, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }

  if (fileExistsSync(resolve(rootDirectory, 'yarn.lock'))) {
    return 'yarn';
  }

  return 'npm';
}

/**
 * Get the installer for the provided folder, synchronously.
 *
 * @param rootDirectory - the root directory to use
 */
export async function getInstaller(
  rootDirectory: string,
): Promise<InstallerType> {
  if (await fileExists(resolve(rootDirectory, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }

  if (await fileExists(resolve(rootDirectory, 'yarn.lock'))) {
    return 'yarn';
  }

  return 'npm';
}
