import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Category1 from "src/component/category/category1";
import Category2 from "src/component/category/category2";
import Category3 from "src/component/category/category3";
import Category4 from "src/component/category/category4";

const Category = () => {
  return (
    <>
      <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / CATEGORY"
      />
      <Category1
        insideData={[
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAMAAADorg53AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAeZQTFRFAAAA+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oabuEEghAAAAKJ0Uk5TABmjXon/crC+SQIzE9jlsZSInLjn3BH9cFzmUwwFUJK/1uDezsPzqvs+VfqQBG5+Fgj5jQZ0AWulrV9h8TkXfdnyq4tt94BNdQ3GSr1E38EkWA4vT5rdVAlmyGzQ9FlFA52BVu2HQcqhcdQL5P7a7OuGJz/LjBi7pHyi4Td4gx899iqsTqAKK1K88HNgUYX4wu+pmMeTih5CLF2EploytbRvYTpZZwAAAdVJREFUeJyFkgdXE0EURp+QDzAQTIIQqgnR0CIdUTRKQoBICN2ASpEWRCk2IBoLHRUpAtKr/5TZZkLOHHnn7Nm939ydnXk7RJy6EhHJiy+WCoi6VIoGEHNVLYE6No4raSBU/DWtTqVPuI5EnpNkQHJKKoLFk9JgSKeMG0ZTpvnmrWgLsnhSNnJyg5THldKt7Au38xUs4EqFANOK/isVl6C0zHinXOG7POkeUBHK9znSA2HPtocKPqq0wxHupAFVTqBaWV8NeyVcimJZLbkeZ4hU52ZoDpPqLWKDPTI2NAJNzS3/1tTa9qTa284ES0cT8FRInj1nqCPqlCSXtqtb+kmmHoYv4qi3vs8mcD/JfRpolwTrIOATpx2KkP/uS5KlFAaNw69eo2JkFBgb17wRx9++0wLvpZ5kkQPuD+xxApM05ZePhvmji2gYfqLyuqJPTAICgv+Z7Zzoy1e9/tvAtBDMzELj0aQ6coQ+eQH/HJEF88FW5KrctpAz5yC1h92qFhZhZSotff9R+3NZGusK6H6trA4ZxRasjbGEXeu/J8bl8Y3NLQP+9G07VTvOGMwKs+/67CGTd5t0eyNUHJIoZ3z/4NB7tBnQFh6ftIpBvu/0TKrTs7/nop5VCL+4s1UAAAAASUVORK5CYII=",
            title: "SPORTS SHOES",
          },
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAMAAADorg53AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAexQTFRFAAAA+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oabT37SdgAAAKR0Uk5TAAlz5LyKVTwrKCo4U3uyuCSe//Pl2+Pw/Krm1uf0+v779ej2RuJ0LD1MV11aWD4xmYfsAQQFA4wljhwO1asu8R92YA0CovgjTpH5Gfe3oO8IIDtRWWd4tc398o3UmFDfN667BkOAusjT19rdm0s1ctm0FJrqT6TCaietodyB0nGSIcaDz8waORDBNAqWSEALRS2LqZXQpr1/uRWQxSYeHbGvF2y2Os91AAABvklEQVR4nGNgoCVgZGJmYWVj5+Dk5OLm4eVj5semSEBQCAiERURFxcRBLAlsijgkhaSkZWTl5OUVFJVElRSUsSlSURVSU9fQ1NLW0dXU0zcQV8SmyFDBSJOBwdjE1MwMyDPHqshCSMjSioHBms1GydaOgcHSHkORiYOjsJC4kzODi6uQnJuQkCamImt3D08heSEvFk0Gbx8vXz9/IdcAuKLAoOAQp9Aw8/AI8UihqOgYoViGOKH4BLNEoSR3iKLklNS09IzMrGwpoApZOSGvELacXIY8IfF8lQKhwiKwIoHiSCEoKJEX4i+VFyoDm14OFqoAu6mySkhIttpPvqa2TkiwXkiIza6hEayIuwmoJtEYrIhXyL7ZAmh4i4V5VGsbk1873BcdubrAEAAr6owsBwaKh5CofpdnHEO3szF6oIAUlSj2AFm9QEXYAh+qSFYhpr6vf4JQ5kQciib5KzLEg/wQpSovPnkKdjDVS5FhmpC8VI2iED6gyBCnGDl9Ro8k38zpOICqgiLDrNly/nPqJ8ydNx87sCqOUmRw4ZiiLCTWOnPBQhxAVEGBgcFl0WLpKEUfLzkcwEdRCYe/yQAAJ2yWevXHy+kAAAAASUVORK5CYII=",
            title: "CASUAL SHOES",
          },
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAMAAADorg53AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAlhQTFRFAAAA+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oDb2gAAAMh0Uk5TAANC36EPAQqJ//m3NAgCBgyi/uOLPxsTERw9bUYQzfrl5/jDuLrJ/PQf6XNErN7q8vf17/1h3T4LN2yOo62rnoSwtHgjBCadIXmVveK8ODGqaVgNchaz+8JMGYf28NJXUJHWGHvxsXXK0zaS7VK188HFGkF3Esvmli5NY3aNyE+XzErA6HB0qB0eTqbRnEcoJTqvz5q5hY+u1dp+17sUMoYvk7Z9J5AqLJgHFWB8Zilu2+C/lAkF2FxaS0CC7tyypZ+gJIrZPOT04k4CAAACW0lEQVR4nGNgIBMwMjGzsLIRUMTOwcnFzcPLCOHx8TNiUyQgyCnEKSwiKiYuISEuKSUtg02RrJy8gqISJxezsoqqmoI6pwY2RZoaWto6unr6BoZcXEbGGkImWNTwmXKamTNYWFpZ29ja2Ts4chlgUcTvxKnv7OIK41ppYFPkpsHJaeDuAeN6GmFT5GWi4O3j64dXkb+BfIBbYFAwjB+CRVFoGGd4RCQrnB8VHYOhiNVBPSZWPS4eyhVLSExSR1eUnJLKmZaekRkI5vH5JSbJA32BooQxKztHiNPWXydXEsTljczLFyoolEdS5FpUXKJqxMksFKtbCuJb8JSUcZVXiEJ9x2ZRWVVdU2tXp2+SU1HfYNwowMBW2sTR3GJi1irJCPada1abYEQcs5aGCad8e3wHX2eXqIC5dndPLCdnTroEJJwY08sUuThN1DnN1Izle/v6J0ysL5k0uZxLPUaec0onNDADWzjzp07zVOacXjkjXGtmY0bcLK1wTqOC2e6Gc+pByQ0Ud+Xhcye6zJvvyLnAYuGiFiFOTk6hlsVLdNyWLjMRXC65wlJ0pZIBA1d42ipgXKgCFTGutlyTsnadzPoOWXa3DTOF9DKSNuptMhYyYBARyt/cxya5knNLKDCgtgYHs28LXTOlzicnnNPEhBMMDBhk7TjVFR2tesO3RzIwbJXk2WG9uSXVECitFGezYMPOXbtB1jGU7tnLGW4I9GDO9n05BvkxXOqcQvqOdoacevsPHDx46FCSuhAoqA8fOZofk58vDzJa3si4zFpmHuOxHqNwEzAQyj8OAFTdmFWI1rgXAAAAAElFTkSuQmCC",
            title: "FORMAL SHOES",
          },
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAMAAADorg53AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAklQTFRFAAAA+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oabXrM9zQAAAMN0Uk5TAAo7DAIBBC1zpby2jg4gzvzXaBgGBTak8P/9/po05PP5+9FrXsjmy7rYJDXs8YKs6PjchC4HKNta6kdbuOFgosl+3WXy7xBt9FfGudKfJ1wxrm7rKxoDC0avPBYq+k6BrR7MNxdCapDudWSj1vdsJVaMwn8VVZTaX+LUp9neSw0/keW0m+10IUNwkx8P9ak9FLMyEm+LjxuJhqsjg3yVGSaqVC/fqBw+oAh4wBOSjYq9fUBF47e19kpYvzOmCZ2ywTi7pOqnkAAAAjRJREFUeJxjYBhwwMjEzAKkWNnYOTi5uHl4sShh4eMXEBQSFhEVE5eQlBKQlpQRxVAjKisnLa+gqKSsoiolr6auoakoqYWhSFtHUldP38BQSkrKyNjElMHMXNoYQ5GFpaSOFZ+1jaGkrR0bSMBewQFDEbOjk6SEo5mzi6ueG1jA3cMSi8s9vSR0vX3kff0gXH95DyyKWAMCJSU9AsWg3CCPYLiUW0hoGIQVHqEv6REZBWSxRcfIyurHekH9zRcXn+CYCGLyRjkmSer6JjOwpKSmpet7e2dIZ4LE2bSysnNyJW3z8hMDCgqLFAV8ivMZSkrLVF2lJBWkJcv5QHor9G0lXfkrpaoSqm1qBCRrZerqGRsaBWMlm5p5Wlol28IYWNsbzSV1Ndo6OpMMJSUlXRy64roZeoS8ehUNpfr6J6g0xZqxMkyY2Jtb5D6ph2Fy/5Sp04otmKYzsArPqJU0nzlLwH42wxzXygkMDHOl5OdNqod4K2X+ZKAPWRcszFAoWiRcLM29mKFagauHgWFJ7NJlqOG0XNVQfoXJSrZVCqu11xRJrw1nYIjNXYeqxrpc2mX9MlYGVmUJB6YAJckgUwaGDdKVG9lF4Er8utQkPdwng5h2akqb6solNwNdsFhXWn5L0taEPjDYZrtdcssORrD6nbXyu9S3G8wGMsN2b5AEJkBFKJCU3DOfDWJogZG0gIBk0nRwfO6dlLlv/4bVIHDAu+sgPLEu27hh9YFDi1ZiSQNkAwBnSo6nG0ubEAAAAABJRU5ErkJggg==",
            title: "FLAT",
          },
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAMAAADorg53AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAj1QTFRFAAAA+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab5EDQKgAAAL90Uk5TAANhw2QOBE7R+vR+Ezm97bnn/WoCKKPsjVbQARyL6KVNqxESduO6ieshC2Lcz1Xbyz8G1d9oQLhmDMzqJYPumB43OiPC8ZMYRXTKtvasFu98Qa/+2AWk+cc70kl42v9y4Slx98b18+ANCIcfoVpeFzYxMDRIokpw5vCMJsQnGp34jt6PVNbAHbu3gCqcWQpQ2ZXikWCaEJT7wZ/keUOu8k/pQkYUc4jIID7XMzz8shu804pSLBUrpoQ4NTJ7GVjhMl1PAAAB7ElEQVR4nGNgwAUYmZhZWHHKQgAbOwcnFzcPfjW8fPwCgkLCjHjUiIiKiUtISomz4FEkLSMrJ6+gKC6hhMcgZRVVNQV1DUVNadxqtLR1dPWY9A0M2XCrMWI3NjE1M1e1sMTjIF4ra24bWzt7BwYGRyccipxdXN3cPTgMPNjcPa28sKtR8vbxlfGT9Q9gDQyyDg7BqiY0LDxCUzoyii86JpYzLi4emxoRifCERGnLpOQU5tS09HCDDFTngoBIZlYqvyMDQ3ZOXFxcSG5Oah5yiIvk8xYUFhWXlLoKljFI+5VXpFZyVlXX8Ncih2ZdfUMyF5dPQ6VBmYi0QyOXjmxAU3NLaxtSKshst+BvElDr6FTs6mZkkOkJj+jt658wMWbSZCQnTZk6aYLFNCUl1kwRBgae6TNmejAwKLTOshcXzkQomh0+UxiWCI3mhFvNBdJlUfM65y9Airz5CxfBtbALzu4H0Yt1Z0aJ84ogFLkmLIExnWvCl4aCGHMNWgX1RRmQFcF8wbgsdR4koRku5/eJWIGkKHUhLLJXrpJbDWGtqVkbvG49kqINMzZu2rylbuv6bdt9dhhBxHa2xcXNykdSlN2TlsovN6lJVS45wQYaxrv44uKaUXJU5u49nasENSomuOTCvLlXNnbVPigHAODoen17kZEgAAAAAElFTkSuQmCC",
            title: "HEELS",
          },
          {
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAMAAADorg53AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjFQTFRFAAAA+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oab+oabMA4WcgAAALt0Uk5TAAJw1aRDDwQDBSV64rIGU8/+/9OigXR8lsD5El7S/N3q9Pv37fANHESa6NYbVZC4nmWE+vMOExUXGh4mMEZzreeoLxQWCAFS+Bg5g4mOlbfU78rxlCd5QNH17OXb2YgxiiQ8jPJPzbSLclpXpW06j+kjyde6vAwzr2o4kZMfTNj9vUvCX7lhNbY/4WOGfnd7kszFQlgyTt4HXNwqEQpgfUnEUZnj9me1p5+d4KDQo6ac6652dT47Vs7uswCy4ccAAAH6SURBVHicY2AYIoCRiZmFlY2dg4ODnZOLm4cXmxo+fgFBIUFhEVExcQlJKSEhQUwl7NIysnI88gqKSoJCQnLKKqqCimgqONTUNTS1hLT5dXT19AWYZSUNDI2MTaC6Tc3MLSytrG1s7ewd5OSEHJ04gLY667i4ujG4e4AUuXl66Yp5+/j6ifgHBAoJGQfpawWHhDJCzfYMA5nEGO4bESmo5BEZHKUVHRMbrBgXn6DgEZIIVsWZlBwjmMLglpomJCTkIaCvn86SkZmVnWOinZuXXxDpVwhUxZ5dBHR+CkNosZxsjrFyEG9JKa+mWFJZeYVHbGVVtYJiTa0bQ119Q2O6nAlDhmBsU2FOimAD0DzB4OaWsqRWJea2dr+olHxLjg5j7c4soMO75OwZ2EO7RXt6+/onTJSbNJkzvNVYeMrUaoVA8WnTG1pmzAQqUhac5Zs9W810TpnrXM952inz2TkXLJSLWDR7ceCSiKUKVgzLpEwYSoUEI2MmLV+xcpWBwSr71YIBa1YZrFUSCljnDwwOIdX1GyY1pDBMBjrFY6mQnJQHECgrCcl5eCh6ACNESlEOqKgBJJTC4JogJLhxk+hmsS04gD3QdwxmyUJyBSuYmrbmbcMGvDKMQRFsun2HoJSJauBO7CASklQY1dwNdqgo4gAmKbuokZCpDQCVHayqmmioRQAAAABJRU5ErkJggg==",
            title: "BOOTS",
          },
        ]}
      />

      <Category2 />

      <Category3 />

      <Category4
        insideData={[
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat2-cd63b7c8fc62f886e77d95575e1b271a.png",
            title: "calculator watch",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat3-2ef9aaedeb9143b4f416c8e0225f8a99.png",
            title: "Antimagnetic watch",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat1-40d0b04fc613bd810301208b79a6d94b.png",
            title: "Watch models",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat3-2ef9aaedeb9143b4f416c8e0225f8a99.png",
            title: "Formal watch",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
          {
            image:
              "https://multikart-react.vercel.app/_next/static/images/cat1-40d0b04fc613bd810301208b79a6d94b.png",
            title: "Watch style",
            para: [
              "Watchmaking conglomerates",
              "Breitling SA",
              "Casio watches",
              "Citizen Watch",
            ],
          },
        ]}
      />
    </>
  );
};
export default Category;
