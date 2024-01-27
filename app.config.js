{
  apps: [
    {
      name: "binar-deploy",

      script: "serve",

      interpreter: "none",

      args: "serve -s build -p 5173",

      env: { NODE_ENV: "production" },
    },
  ];
}
