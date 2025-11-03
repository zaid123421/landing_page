'use client';

type SocailLinkProps = {
  Icon: React.ElementType;
  link: string;
};

export default function SocialLink({ Icon, link }: SocailLinkProps) {
  return (
    <a target="_blank" href={link} className="p-2 rounded-xl cursor-pointer hover:bg-[#0AB3F6] ">
      <Icon className="text-2xl" />
    </a>
  );
}
