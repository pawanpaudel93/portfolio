import { GithubSvg, LinkedinSvg, TwitterSvg, EmailSvg } from "@/assets";
import { openGithub, openTwitter, openLinkedin, sendEmail } from "@/utils";
import SectionTitle from "./SectionTitle";

const socialLinks = [
  {
    onClick: openGithub,
    icon: <GithubSvg style={{ height: "20px", width: "max-content" }} />,
  },
  {
    onClick: openTwitter,
    icon: <TwitterSvg style={{ height: "20px", width: "max-content" }} />,
  },
  {
    onClick: openLinkedin,
    icon: <LinkedinSvg style={{ height: "20px", width: "max-content" }} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container p-[30px] bg-[#000000e6]">
        <SectionTitle title="Contact" description="Contact Me" />

        <div className="mt-4 flex gap-3 px-3 max-md:flex-col">
          <div className="flex flex-1">
            <div className="text-[#444444] p-4 bg-[#ffffff14] w-[100%]">
              <img
                className="text-[#18d26e] rounded-full p-3 bg-[#ffffff1a] float-left"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA8VJREFUSEudVkt200gUva8E52SGM5Nh0Mm4iT8rIL0CzAo6zEksrwBnBRbOAuKsAHbQZgWOHeaYQYg9M6Omz4nq9XkllVSyJMuggY9VVar3u/e+RwSAzQ/2eGoOJtv73ClnSh/XRPa/fFUuqPedQOAkPvlf8VXVRdWmY+v+IjgF9Ctz76N3s+qOljay3LdZWkqu3Gkln6ijWdD46UUfATp1g2FQuG5/GGyXsjLV9QXIn/AXF1MAcaRbD2kePHSuwmzZproGVuU1zj7y7wan4OifZOUGkRp6T9HQWk8AtDVhsz4ZH7pmijV2kVn0PQd/W6bm7XnARCNzPFLHq25o6uovzs8IdG0IE3nH2/WuQXWJJ1vIa87fBUzKGPaU1/3+cnQrxprzxCE5/6iO191waan7izUu+ihRMWhEQEN2mXFLQMiMBhSGsk7A/KE17lSmeh8uWqXx74JT1npECp0yxLp65Hmqe/9nKA6lR3MRy0vzLuhFHP1NoF7i4YQidflg6zYLjtiLRs6+SN83RRSwjo5Y0RDAs0Qe5gQ1/N4KPxWQ7i5I2gC6zh8yerMhUm8AfgVmudg+P8AIV+2xs0Z48aVv0nr/0o0yn880YhGAfz39NanVDwCfiNBgxusKtt0cRCpYdsNNuv/LWk2AUAJEI6mNgnpj09O864fM3HeMf/aUCiSaGvrvJCPZBPjziyEI7+X0QaQOTSQEPJ8PehoihQYZl+v2eGiB81t6nriTCog/T+pLgJG4dixxzcWFAON1bIzfrlpXokY7onG7UPXBOOLkx1+cS70MIgEsOeag4WfW93jqKW+QAif5Nmt5O73KwSF9efEl6ERai9jHxrNcfgYgSLVOyebkIKJBDK56Bdh2p8DjP2ZB4z8VnYGox4QlmKeSXtP2lA4sDuKSY0OEcHVydWkiTuyLuHiETR6AefkoGK6bgPxZcERPtEiiS7Olghpo1h0m9NPygJYKNMgJiEO50kwVZoCtbEpUYC0AbOfTWJb2Iij3ahK7KpionTiQyiTAITQaVj6lJOvW1aE7UVamOkN7PXSk/RnxIcCjfFvM1lXXrfleEWepLOqtGMsPAknDl8HPaoNhiPfX6mQ0tQTYH1xuClyu2cmSdTL60AQRXcro8xjpayJDQ6xa41SshA7FiKsM1Ahzc3Ex5WTY28YEET48nIwD94pUq/N6UW2lgPYk+uNZv/HT01MGtfPtnm9W7fFZSnJLp0KANZGVi3TmzvNF0BM+m1GD1cQOfrXKVScg5RFXM3lXB6vhyz46vI87eef+BwGwvTHaTcypAAAAAElFTkSuQmCC"
              />
              <h3 className="font-bold text-xl text-slate-400 my-[8px] ml-[68px]">
                Social Profiles
              </h3>
              <div className="social-links flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    onClick={link.onClick}
                    className="flex justify-center items-center rounded-full p-2 w-10 h-10 cursor-pointer bg-slate-50 hover:bg-slate-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="flex items-center gap-3 text-[#444444] p-5 bg-[#ffffff14] w-[100%]">
              <EmailSvg style={{ height: "32px", width: "max-content" }} />
              <h3
                className="font-bold text-xl text-slate-400 my-[8px] ml-[68px]"
                style={{ padding: 0, margin: 0 }}
              >
                <a
                  href=""
                  onClick={sendEmail}
                  className="text-slate-300 hover:text-[#18d26e]"
                >
                  Email Me
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
