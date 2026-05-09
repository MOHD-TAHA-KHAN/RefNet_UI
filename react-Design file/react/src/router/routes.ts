import Frame2371 from "@/views/Frame2371";
import Frame21259 from "@/views/Frame21259";
import Frame2562 from "@/views/Frame2562";
import Frame2209 from "@/views/Frame2209";
import Frame2669 from "@/views/Frame2669";
import Frame21117 from "@/views/Frame21117";
import Frame2985 from "@/views/Frame2985";
import Frame2890 from "@/views/Frame2890";
import Frame2148 from "@/views/Frame2148";
import Frame2791 from "@/views/Frame2791";
import Frame237 from "@/views/Frame237";
import Frame21353 from "@/views/Frame21353";

export const routes = [{
          path: "/frame2371",
          component: Frame2371,
          guid: "2:371",
        },
{
          path: "/frame21259",
          component: Frame21259,
          guid: "2:1259",
        },
{
          path: "/frame2562",
          component: Frame2562,
          guid: "2:562",
        },
{
          path: "/frame2209",
          component: Frame2209,
          guid: "2:209",
        },
{
          path: "/frame2669",
          component: Frame2669,
          guid: "2:669",
        },
{
          path: "/frame21117",
          component: Frame21117,
          guid: "2:1117",
        },
{
          path: "/frame2985",
          component: Frame2985,
          guid: "2:985",
        },
{
          path: "/frame2890",
          component: Frame2890,
          guid: "2:890",
        },
{
          path: "/frame2148",
          component: Frame2148,
          guid: "2:148",
        },
{
          path: "/frame2791",
          component: Frame2791,
          guid: "2:791",
        },
{
          path: "/",
          component: Frame237,
          guid: "2:37",
        },
{
          path: "/frame21353",
          component: Frame21353,
          guid: "2:1353",
        }];


export const guidPathMap = new Map(
  routes.map((item) => [item.guid, item.path])
);
export const pathGuidMap = new Map(
  routes.map((item) => [item.path, item.guid])
);

export const getPathByGuid = (guid: string) => {
  return guidPathMap.get(guid) || "";
};

export const getGuidByPath = (path: string) => {
  return pathGuidMap.get(path) || "";
};
