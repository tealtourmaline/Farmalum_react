import { Carousel } from 'react-bootstrap';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/1weu96fhrx5b/6w5wUzzUoYZotkgUWJbfr9/8637d519ad96f414c7b777e6b8a7ff97/banner-fusionWater-desktop-octubre.webp"
          alt="Primer slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/1weu96fhrx5b/798YQcY1eJu33AE16YfRza/4f6aa3c0b99814042c2ffee3145af536/banner-descuentosdemiedoalergia-desktop.webp"
          alt="Segundo slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/1weu96fhrx5b/1KlJYB4CRQzBhS5lygtWBn/c6e03430439fb9e299111164c65f842c/banner-descuentosdemiedomujer-desktop.webp"
          alt="Tercer slide"
        />
      </Carousel.Item>

      {/* Agrega más elementos Carousel.Item según sea necesario */}
    </Carousel>
  );
}

export default MyCarousel;
