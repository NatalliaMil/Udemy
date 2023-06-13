const serverNewConfig: basicConfig = {
  protocol: "https",
  port: 3001,
};

const backupConfig: basicConfig = {
  protocol: "http",
  port: 3000,
};

interface basicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: basicConfig): "Server started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);

  return "Server started";
};

startNewServer(serverNewConfig);
startNewServer(backupConfig);
