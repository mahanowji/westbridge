import logo from '../assets/logo-circle.png';

export default function BrandMark({ size = 30, className = '' }) {
  return (
    <img
      src={logo}
      alt="WestBridge Immigration"
      width={size}
      height={size}
      className={className}
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
}
