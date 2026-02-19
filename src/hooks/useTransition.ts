//React18 hook, 管理UI中过渡状态
//const [isPending, startTransition] = useTransition();
//无任何参数
//返回一个数组，包含:1.isPending(boolean),通知是否存在待处理的transition.
//2.startTransition函数, 使用方法标记为transition

// 1.编写vite mock server插件
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

import type { Plugin } from "vite";

import mockjs from "mockjs";

import url from "node:url";

const viteMockServer = (): Plugin => {
  return {
    name: "vite-mock-server",
    configureServer(server) {
      server.middlewares.use("/api/list", async (req, res) => {
        const parsedUrl = url.parse(req.originalUrl, true);
        const query = parsedUrl.query;

        const data = mockjs.mock({
          "list|1000": [
            {
              "id|+1": 1,
              name: query.keyWord,
              address: "@county(true)",
            },
          ],
        });

        res.end(JSON.stringify(data));
      });
    },
  };
};

export default defineConfig({
  plugins: [react(), viteMockServer()],
});
