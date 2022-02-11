import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CopyBlock, atomOneDark, CodeBlock } from "react-code-blocks";
import { useTheme } from "next-themes";
import LogCard from "../components/logcard";

const data = [
  {
    title: "New User Sign Up",
    desc: `userid: #2209988
  Username: jackreacher`,
    time: "26 Dec 2021 07:02:33",
    icon: "user-added",
  },
  {
    title: "User Login",
    desc: `userid: #2209988
    Username: jackreacher`,
    time: "26 Dec 2021 07:02:40",
    icon: "user-added",
  },
  {
    title: "User Joined Waitlist",
    desc: `userid: #2209988
    Username: jackreacher`,
    time: "26 Dec 2021 07:02:42",
    isNotify: true,
    icon: "user-added",
  },
  {
    title: "New Order Placed",
    desc: `userid: #2209988
    orderid: #9082781`,
    time: "26 Dec 2021 07:03:20",
    icon: "shopping",
  },
  {
    title: "Running DB Migrations",
    desc: `userid: #2209988
    orderid: #9082781`,
    time: "26 Dec 2021 07:07:10",
    color: "bg-amber-400",
    icon: "db",
  },
  {
    title: "Grafana Error",
    desc: `Instant Query Failed`,
    time: "26 Dec 2021 07:07:13",
    color: "bg-red-400",
    isCritical: true,
    icon: "critical",
  },
];

const data2 = [
  {
    title: "New User Sign Up",
    desc: `userid: #2209988
  Username: jackreacher`,
    time: "26 Dec 2021 07:02:35",
    icon: "user-added",
  },
  {
    title: "User Made Purchase",
    desc: `userid: #2209988
    Username: jackreacher`,
    time: "26 Dec 2021 07:02:40",
    icon: "shopping",
  },
  {
    title: "User Upgraded Plan",
    desc: `userid: #2209988
    Username: jackreacher`,
    time: "26 Dec 2021 07:03:45",
    isNotify: true,
    icon: "user-added",
  },
  {
    title: "Version 1.05 Deployed",
    desc: `status: Success`,
    time: "26 Dec 2021 07:03:50",
    color: "bg-green-400",
    isCritical: true,
    icon: "critical",
  },
  {
    title: "Application Down",
    desc: `status: Preparing Restart`,
    time: "26 Dec 2021 07:04:00",
    color: "bg-red-400",
    isCritical: true,
    icon: "critical",
  },
  {
    title: "Restarting Application",
    desc: `status: Restarting Application`,
    time: "26 Dec 2021 07:04:10",
    color: "bg-amber-400",
    isCritical: true,
    icon: "critical",
  },
];

const withoutLogDogs = `web_1  | [26/Dec/2021 07:02:33] "POST /api/user HTTP/1.1" 201 0
web_1  | [26/Dec/2021 07:02:26] "GET /v1/projects HTTP/1.1" 500 153235
web_1  | [26/Dec/2021 07:02:33] "GET /admin/ HTTP/1.1" 302 0
web_1  | [26/Dec/2021 07:02:33] "GET /admin/login/?next=/admin/ HTTP/1.1" 200 2215
web_1  | [26/Dec/2021 07:02:34] "GET /static/admin/css/nav_sidebar.css HTTP/1.1" 200 2616
web_1  | [26/Dec/2021 07:02:34] "GET /static/admin/css/base.css HTTP/1.1" 200 19513
web_1  | [26/Dec/2021 07:02:34] "GET /static/admin/css/login.css HTTP/1.1" 200 954
web_1  | [26/Dec/2021 07:02:33] "GET /waitlist/ HTTP/1.1" 201 0
web_1  | [26/Dec/2021 07:02:34] "GET /static/admin/css/responsive.css HTTP/1.1" 200 18545
web_1  | [26/Dec/2021 07:02:34] "GET /static/admin/js/nav_sidebar.js HTTP/1.1" 200 3401
web_1  | [26/Dec/2021 07:02:34] "GET /static/admin/css/fonts.css HTTP/1.1" 200 423
web_1  | [26/Dec/2021 04:53:19] "GET /metrics HTTP/1.1" 200 18597
web_1  | [26/Dec/2021 04:53:34] "GET /metrics HTTP/1.1" 200 18598
grafana_1     | t=2021-12-26T04:53:34+0000 lvl=eror msg="Instant query failed" logger=tsdb.prometheus query=1+1 err="Post \"http://localhost:9090/api/v1/query\": dial tcp 127.0.0.1:9090: connect: connection refused"
grafana_1     | t=2021-12-26T04:53:34+0000 lvl=info msg="Request Completed" logger=context userId=1 orgId=1 uname=admin method=POST path=/api/ds/query status=400 remote_addr=172.27.0.1 time_ms=2 size=131 
web_1  | [26/Dec/2021 07:02:40] "POST /admin/login/?next=/admin/ HTTP/1.1" 302 0
web_1  | [26/Dec/2021 07:02:42] "GET /admin/ HTTP/1.1" 200 4457
web_1  | [26/Dec/2021 07:02:42] "GET /static/admin/css/dashboard.css HTTP/1.1" 200 380
web_1  | [26/Dec/2021 07:02:42] "GET /static/admin/img/icon-changelink.svg HTTP/1.1" 200 380
web_1  | [26/Dec/2021 07:02:42] "GET /static/admin/img/icon-addlink.svg HTTP/1.1" 200 331
web_1  | [26/Dec/2021 07:02:42] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 200
web_1  | [26/Dec/2021 07:02:33] "GET /api/order HTTP/1.1" 201 0
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Creating SQLite database file" logger=sqlstore path=/var/lib/grafana/grafana.db
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Starting DB migrations" logger=migrator
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="create migration_log table"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="create user table"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="add unique index user.login"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="add unique index user.email"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="drop index UQE_user_login - v1"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="drop index UQE_user_email - v1"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="Rename table user to user_v1 - v1"
grafana_1     | t=2021-12-26T04:40:16+0000 lvl=info msg="Executing migration" logger=migrator id="create user table v2"
grafana_1     | t=2021-12-26T05:12:24+0000 lvl=eror msg="Instant query failed" logger=tsdb.prometheus query=1+1 err="Post \"http://localhost:9090/api/v1/query\": dial tcp 127.0.0.1:9090: connect: connection refused"
grafana_1     | t=2021-12-26T05:12:24+0000 lvl=info msg="Request Completed" logger=context userId=1 orgId=1 uname=admin method=POST path=/api/ds/query status=400 remote_addr=172.27.0.1 time_ms=2 size=131 referer=http://localhost:3000/datasources/edit/bx9bvCT7z
web_1         | [26/Dec/2021 05:11:19] "GET /metrics HTTP/1.1" 200 21174
web_1         | [26/Dec/2021 05:11:34] "GET /metrics HTTP/1.1" 200 21176
web_1         | [26/Dec/2021 05:11:49] "GET /metrics HTTP/1.1" 200 21162
web_1         | [26/Dec/2021 05:12:04] "GET /metrics HTTP/1.1" 200 21165
web_1         | [26/Dec/2021 05:12:19] "GET /metrics HTTP/1.1" 200 21164
`;

const jsExample = `var axios = require('axios');

var data = JSON.stringify({
    "event": "User Sign Up",
    "project": "github-notn-sync",
    "channel": "user-register",
    "description": "User: Carter Doe\nEmail: carter@gmail.com\nUsername: carter-doe"
  });

var config = {
  method: 'post',
  url: "https://api.logdogs.co/listen/add85962-1fc0-4e43-a1d7-0a5b9cff8801",
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});`;

const pythonExample = `import requests
import json

# Webhook URL
url = "https://api.logdogs.co/listen/add85962-1fc0-4e43-a1d7-0a5b9cff8801"

payload = json.dumps({
  "event": "User Sign Up",
  "project": "github-notn-sync",
  "channel": "user-register",
  "description": "User: Carter Doe\nEmail: carter@gmail.com\nUsername: carter-doe"
})

response = requests.request("POST", url, data=payload)
print(response)







`;

export default function Home() {
  const [example, setExample] = useState(pythonExample);
  const [isJsActive, setJsActive] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="container bg-gray-200 dark:bg-[#101010] text-gray-900 dark:text-white">
      <Head>
        <title>LogDogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1
          className="title"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Image
            src="/logdogs_logo.svg"
            height={200}
            width={335}
            alt="logdogs"
          ></Image>
        </h1>
        <p className="display">
          LogDogs notifies you of important events of your service so that you
          can get a better insight of how your applications are performing in
          realtime.
        </p>
        <div className="container mt-5">
          <div className="row g-3">
            <div className="col-lg-6 col-12 p-3">
              <p>Without LogDogs</p>
              <CodeBlock
                customStyle={{
                  height: "500px",
                  overflow: "scroll",
                }}
                text={withoutLogDogs}
                showLineNumbers={false}
                language="javascript"
                theme={atomOneDark}
              />
            </div>
            <div className="col-lg-6 col-12 p-3">
              <p>With LogDogs</p>
              <ul className="flex flex-col w-full px-0">
                {/* logcards */}
                {data.map((logData, i) => (
                  <LogCard key={i} {...logData} />
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-5">
            <p>
              We can even send you notifications for important critical events
              through E-mail, Discord or Slack
            </p>
          </div>
          <div className="m-5 text-center">
            <div className="mb-3">
              <button
                className={`btn w-50 p-3 ${!isJsActive ? "btn-active" : ""}`}
              >
                My Sass
              </button>
              <button className={`btn w-50 p-3 bg-slate-400`}>
                My MLOps Project
              </button>
            </div>
            {data2.map((logData, i) => (
              <LogCard key={i} {...logData} />
            ))}
          </div>
          <div className="mt-5 text-center">
            <h1 className="display-6">
              How does this work? You must be wondering.
            </h1>
            <p className="mt-5">
              If you hate learning another library or SDK, just for a small new
              functionality, you are not alone. We radiate with your philosophy.
            </p>
            <p>
              With LogDogs, all you need to do is make an HTTP POST request to
              your project specific Webhook URL and that's it, seriously.
            </p>
            <div className="mt-5 text-start">
              <button
                className={`btn w-50 ${!isJsActive ? "btn-active" : ""}`}
                onClick={() => {
                  setExample(pythonExample);
                  setJsActive(false);
                }}
              >
                Python
              </button>
              <button
                className={`btn w-50 ${isJsActive ? "btn-active" : ""}`}
                onClick={() => {
                  setExample(jsExample);
                  setJsActive(true);
                }}
              >
                Javascript
              </button>
              <CopyBlock
                text={example}
                showLineNumbers={false}
                language={isJsActive ? "javascript" : "python"}
                theme={atomOneDark}
                codeBlock
              />
            </div>
          </div>
          {/* NOTIFY TRUE */}
          <div className="row g-5 mt-5 align-middle">
            <div className="col-7">
              <h2>🔔 Want push notifications?</h2>
              <p>
                Add <code>notify: true</code> to your POST request body and
                we'll send you a push notification on E-mail, Discord or Slack
                whenever that event is triggered.
              </p>
            </div>
            <div className="col-5">
              <Image src="/notifyTrue.svg" width={960} height={474} />
            </div>
          </div>

          {/* EXTRA INFO */}
          <div className="row g-5 mt-5 align-middle">
            <div className="col-5">
              <Image src="/description.svg" width={960} height={474} />
            </div>
            <div className="col-7">
              <h2>❗❓ Want to display extra information?</h2>
              <p>
                Dump all the extra information in the description field of your
                POST request body and we'll display it all for you.
              </p>
            </div>
          </div>

          {/* CRITICAL EVENT */}
          <div className="row g-5 mt-5 align-middle">
            <div className="col-7">
              <h2>💣 Got an critical event?</h2>
              <p>
                Add <code>critical: true</code> in your POST request body and
                we'll make sure that event get's extra attention from us.
              </p>
            </div>
            <div className="col-5">
              <Image src="/critical.svg" width={960} height={474} />
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <h1 className="display-5">
            We love open-source as much as you do 🧡
          </h1>
          <p className="mt-5">
            🎉 We are completely open-source and contributins/improvemnents are
            always welcome! 🎉
          </p>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <span className="mr-5">
              Contibute here at our GitHub repository
            </span>
            <Image src="/github.png" width={64} height={64} />
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/logdogs.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .btn-active {
          background-color: rgb(40, 42, 54);
        }

        .btn {
          color: white;
        }

        button:focus {
          outline: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
          margin: 0 20%;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
