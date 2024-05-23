import styles from './style.module.css';

import { Text } from '@/components/common';
import Container from '@/components/layout/Container';
import { cn } from '@/utils/style';

const Aside = () => {
  return (
    <Container className="relative">
      <aside
        className={cn('absolute top-8 flex flex-col gap-2 w-24', styles.aside)}
      >
        <div className="flex flex-col items-center border border-black bg-white p-2">
          <Text size="xs">찜한 상품</Text>
          <Text size="xs" color="gray" className="mt-1 flex items-center gap-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '0.725rem' }}
            >
              favorite
            </span>
            0
          </Text>
        </div>
        <div className="border-grey flex flex-col items-center border bg-white p-2">
          <Text size="xs">최근본상품</Text>
          <div className="mt-2 text-center">
            <Text size="xs" color="gray" className="block">
              최근 본 상품이 없습니다
            </Text>
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default Aside;
