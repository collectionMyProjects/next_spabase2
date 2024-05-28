import { useRouter } from 'next/router';

import Search from './Search';

import Text from '@/components/common/Text';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';

export default function Header() {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-10 border-b bg-white">
      <Wrapper>
        <Container>
          <div className="flex items-center justify-between py-8">
            <Text
              size="4xl"
              style={{ fontFamily: `'Black Han Sans', sans-serif;` }}
              onClick={() => router.push('/')}
              className="cursor-pointer"
            >
              🗃 스포츠 클럽
            </Text>
            <Search />
            <div className="flex items-center gap-2">
              <div className="flex cursor-pointer items-center">
                <span className="material-symbols-outlined">sell</span>
                <Text weight="light" size="sm" className="mx-1">
                  판매하기
                </Text>
              </div>
              |
              <div className="flex cursor-pointer items-center">
                <span className="material-symbols-outlined">storefront</span>
                <Text weight="light" size="sm" className="mx-1">
                  내 상점
                </Text>
              </div>
              |
              <div className="flex cursor-pointer items-center">
                <span className="material-symbols-outlined">chat_bubble</span>
                <Text weight="light" size="sm" className="mx-1">
                  채팅
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
