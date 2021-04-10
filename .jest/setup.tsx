import { createSerializer } from '@emotion/jest';
import { toHaveNoViolations } from 'jest-axe';

/**
 * Serializers
 */
expect.extend(toHaveNoViolations);

expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `next-${index}`;
    },
  })
);
