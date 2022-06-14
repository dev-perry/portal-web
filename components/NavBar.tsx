/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

type NavItem = {
  icon: string;
  label: string;
  route: string;
};

function NavBar() {
    const router = useRouter();

  const navigation: NavItem[] = [
    {
      icon: 'fa-regular fa-grid-2',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'fa-regular fa-vector-circle',
      label: 'Portals',
      route: '/portals',
    },
    {
      icon: 'fa-regular fa-box-archive',
      label: 'Submissions',
      route: '/submissions',
    },
    {
      icon: 'fa-regular fa-user',
      label: 'Team',
      route: '/team',
    },
  ];
  
  return (
    <div className="h-screen w-60 bg-[#F2F2F2] px-10 py-8 relative">
      <div className="mx-auto mb-10">
        <img src="/portal-logo.png" alt="Vostome Portal Logo" />
      </div>
      <div className="flex flex-col mx-auto space-y-6">
        {navigation.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <a
                className={classNames("text-lg font-medium", {
                  "text-[#48756A]": item.route === router.asPath,
                })}
              >
                <span>
                  <i className={item.icon + ' pr-2'}></i>
                  {item.label}
                </span>
              </a>
            </Link>
          );
        })}
      </div>
      <span className="text-lg font-medium text-[#9D2F2F] absolute bottom-20">
        <i className="fa-regular fa-arrow-left-from-line pr-2"></i>Logout
      </span>
    </div>
  );
}
export default NavBar;
