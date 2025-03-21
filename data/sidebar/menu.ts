export interface MenuItem {
  title: string;
  icon?: string;
  icon2?: string;
  route: string;
  child?: any;
  roles: any;
  type: string;
}

export const menuItems: MenuItem[] = [
  {
    title: "Menu",
    icon: "",
    icon2: "",
    route: "",
    child: [],
    roles: [],
    type: "menuName",
  },
  {
    title: "Dashboard",
    icon: "dashboard",
    icon2: "dashboard",
    route: "/admin/dashboard",
    child: [],
    roles: [],
    type: "parent",
  },
  {
    title: "Profil",
    icon: "profil",
    icon2: "profil",
    route: "/admin/profil",
    child: [],
    roles: [],
    type: "parent",
  },
  {
    title: "Berita",
    icon: "berita",
    icon2: "berita",
    route: "/admin/berita",
    child: [],
    roles: [],
    type: "parent",
  },
  {
    title: "Program",
    icon: "program",
    icon2: "program",
    route: "/admin/program",
    child: [],
    roles: [],
    type: "parent",
  },
  {
    title: "Litbang",
    icon: "litbang",
    icon2: "litbang",
    route: "/admin/litbang",
    child: [],
    roles: [],
    type: "parent",
  },
  {
    title: "Cari Tenar",
    icon: "cari-tenar",
    icon2: "cari-tenar",
    route: "/admin/cari-tenar",
    child: [],
    roles: [],
    type: "parent",
  },
  {
    title: "Manajemen User",
    icon: "manajemen-user",
    icon2: "manajemen-user",
    route: "/admin/user",
    child: [],
    roles: [],
    type: "parent",
  },
  // { title: 'Laporan', icon: 'Laporan-active',icon2: 'Laporan-inactive', route: '/laporan', child : [], roles: [], type: 'parent' },
  // { title: 'Kelola Data', icon: 'Laporan-active',icon2: 'Laporan-inactive', route: '/kelola-data', child : [
  //     {
  //         title: 'Data Penduduk',
  //         route: '/kelola-data/penduduk'
  //     },{
  //         title: 'Data Infrastruktur',
  //         route: '/kelola-data/infrastruktur'
  //     },
  // ], roles : [], type: 'parent' }
];
