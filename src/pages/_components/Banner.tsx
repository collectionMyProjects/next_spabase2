import { faker } from '@faker-js/faker';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <Carousel
      className="my-8"
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      {Array.from({ length: 3 })
        .map(() => faker.image.imageUrl())
        .map((url) => (
          <div key={url} className="h-96">
            <img src={url} alt="" className="size-full" />
          </div>
        ))}
    </Carousel>
  );
};

export default Banner;
