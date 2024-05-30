import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ProductImageProps = {
  imageUrls: string[];
};

const ProductImage = ({ imageUrls }: ProductImageProps) => {
  return (
    <Carousel infiniteLoop showThumbs={false} showStatus={false}>
      {imageUrls.map((url) => (
        <img key={url} src={url} alt="images" className="size-96" />
      ))}
    </Carousel>
  );
};

export default ProductImage;
