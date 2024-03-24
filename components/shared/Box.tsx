import { HoverEffect } from "../ui/card-hover-effect";

export function Box() {
  return (
    <div className="max-w-7xl mx-auto px-6  ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "SEO & Digital Marketing",
    description:
      "Enhance your online presence and attract more visitors with our SEO and digital marketing strategies. Our experts will optimize your website for search engines and create engaging content to keep visitors on your site.",
    link: "https://stripe.com",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Streamline your online business with our e-commerce solutions. From setting up your online store to managing inventory and processing payments, we've got you covered.",
    link: "https://netflix.com",
  },
  {
    title: "24/7 Technical Support",
    description:
      "Get round-the-clock technical support from our team of experts. Whether you're facing issues with your website or need help with your email hosting, we're here to assist you.",
    link: "https://google.com",
  },
  {
    title: "Business Branding",
    description:
      "Build a strong brand identity with our business branding services. From designing your logo to creating a brand strategy, we'll help you stand out from the competition.",
    link: "https://google.com",
  }
];
