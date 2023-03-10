export type UserStatus = "active" | "limited" | "expired";
export type ProxyKeys = ("vmess" | "vless" | "trojan" | "shadowsocks")[];
export type ProxyType = {
  vmess?: {
    id: string;
  };
  vless?: {
    id: string;
  };
  trojan?: {
    password: string;
  };
  shadowsocks?: {
    password: string;
  };
};

export const dataLimitResetStrategy = [
  "no_reset",
  "day",
  "week",
  "month",
  "year",
] as const;
type DataLimitResetStrategy = (typeof dataLimitResetStrategy)[number];

export type User = {
  proxies: ProxyType;
  expire: number | null;
  data_limit: number | null;
  data_limit_reset_strategy: DataLimitResetStrategy;
  lifetime_used_traffic: number;
  username: string;
  used_traffic: number;
  status: UserStatus;
  links: string[];
  subscription_url: string;
} & Record<string, any>;
