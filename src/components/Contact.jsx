import { openGithub, openTwitter, openLinkedin, sendEmail } from "../utils";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA8VJREFUSEudVkt200gUva8E52SGM5Nh0Mm4iT8rIL0CzAo6zEksrwBnBRbOAuKsAHbQZgWOHeaYQYg9M6Omz4nq9XkllVSyJMuggY9VVar3u/e+RwSAzQ/2eGoOJtv73ClnSh/XRPa/fFUuqPedQOAkPvlf8VXVRdWmY+v+IjgF9Ctz76N3s+qOljay3LdZWkqu3Gkln6ijWdD46UUfATp1g2FQuG5/GGyXsjLV9QXIn/AXF1MAcaRbD2kePHSuwmzZproGVuU1zj7y7wan4OifZOUGkRp6T9HQWk8AtDVhsz4ZH7pmijV2kVn0PQd/W6bm7XnARCNzPFLHq25o6uovzs8IdG0IE3nH2/WuQXWJJ1vIa87fBUzKGPaU1/3+cnQrxprzxCE5/6iO191waan7izUu+ihRMWhEQEN2mXFLQMiMBhSGsk7A/KE17lSmeh8uWqXx74JT1npECp0yxLp65Hmqe/9nKA6lR3MRy0vzLuhFHP1NoF7i4YQidflg6zYLjtiLRs6+SN83RRSwjo5Y0RDAs0Qe5gQ1/N4KPxWQ7i5I2gC6zh8yerMhUm8AfgVmudg+P8AIV+2xs0Z48aVv0nr/0o0yn880YhGAfz39NanVDwCfiNBgxusKtt0cRCpYdsNNuv/LWk2AUAJEI6mNgnpj09O864fM3HeMf/aUCiSaGvrvJCPZBPjziyEI7+X0QaQOTSQEPJ8PehoihQYZl+v2eGiB81t6nriTCog/T+pLgJG4dixxzcWFAON1bIzfrlpXokY7onG7UPXBOOLkx1+cS70MIgEsOeag4WfW93jqKW+QAif5Nmt5O73KwSF9efEl6ERai9jHxrNcfgYgSLVOyebkIKJBDK56Bdh2p8DjP2ZB4z8VnYGox4QlmKeSXtP2lA4sDuKSY0OEcHVydWkiTuyLuHiETR6AefkoGK6bgPxZcERPtEiiS7Olghpo1h0m9NPygJYKNMgJiEO50kwVZoCtbEpUYC0AbOfTWJb2Iij3ahK7KpionTiQyiTAITQaVj6lJOvW1aE7UVamOkN7PXSk/RnxIcCjfFvM1lXXrfleEWepLOqtGMsPAknDl8HPaoNhiPfX6mQ0tQTYH1xuClyu2cmSdTL60AQRXcro8xjpayJDQ6xa41SshA7FiKsM1Ahzc3Ex5WTY28YEET48nIwD94pUq/N6UW2lgPYk+uNZv/HT01MGtfPtnm9W7fFZSnJLp0KANZGVi3TmzvNF0BM+m1GD1cQOfrXKVScg5RFXM3lXB6vhyz46vI87eef+BwGwvTHaTcypAAAAAElFTkSuQmCC" />
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a onClick={openGithub} className="github">
                  <i className="bi bi-github"></i>
                </a>
                <a onClick={openTwitter} className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a onClick={openLinkedin} className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAzJJREFUSEulV0FW2zAQ/SNv6KrsMN2UA5BAOAE3KJygYV+COQHOCXCSAzQ3gJ6gnKBNoPumC4q7C6u27zWePslyLMUSEa0XeS/yaEbz588fmQgAqx/8x2M6CHFGkFbPenxu63XplO08HJuswG6nvmxsazOwgm/NtoDAzwIk2NgIHFIb06+GVJOkhjfMD5lm8e1pF0QXYOzYISrura+wjfHy3wzgft4ejcsSGOSK75JDcPHRwqqRjX4bQmJHuwghOt93s4n0soQ6nvZSEC7USoF+gyyy3Wg1n8CSSr9yO6P/sDdMVwKfpSBWBiCkeWvYb7o1W8VfS6t8VULSGaOfV4Ero3hqBFY2fP3iT3QyOxjMG+oSoDo7n5PNn9HivQAdLbXJDFxlZUFdt+EsEtHx/e6lqstTQJtZvvqS7BdcXEmSWrj4AhPhQsonMT4AeCNPysBcgM8fJCMtVXC3Vjw97TLokoBNbaF8qb3MGmpC2U4ExJNeqgIDyNtD2p6eJkx0uXRPNM5bgxN3m5Wr8W1vDOBtBQ4VfJ7vjbKt216J9jJjs50MEuTtkTwedItdA3ip9jEmVIjjvJPN6gMB8adkh0VxRYR9jcojII7ydnYjE2sGXmknM+PKsSTJ76i4YWBPmhfguSBxnLcGN9XhmIurCloCTTcWdPj1IJtXkr1112MFqwl1g1wa6hrSkh7bd72MGWdGpikKEASk0pXoEgYPrWGyWo41Get2IiBvjagx2lQN33UJImMNvRHgkcCJj4Bxo8Yu5dIZ+1RRtgoXxbiEXmU5FRR165azZcdb41pAtGSqwCW5fI+s+6+IM2mzsRDJrJPNn2rzZsYrrHaRyykbDuVqIKQX6owJxOzS6npI5K2hdUFoZG4GbhzCvvoEtZOaTg1WexG3Xrjlu0zbD7VWriqwnE5aadyjUI9It4o5aMmlP/dYvDs/BC/si4D2HDCMjDP4x2UkROe+lU0qYVluUlefglIIet24KYYh7iY34xuI0x/tkWzDpU2z8Vw3/H+87vjO62GvH671DHcMT4c7I/CaYJ7NJnRBX0FGf5sUMmZA4OfUk8xzfM54a+zTvuAah7HwL/LQuzVW3j5rAAAAAElFTkSuQmCC" />
              <h3>
                <a href="" onClick={sendEmail}>
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
