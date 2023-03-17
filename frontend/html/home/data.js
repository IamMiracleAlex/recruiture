/* --------------------------------------- */
/*               Testimonials              */
/* --------------------------------------- */
// data
const testimonials = [
  {
    name: "Mosimiloluwa Koye Ladele",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Senior analyst",
  },
  {
    name: "Kolanle Ademoju",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Devops engineer",
  },
  {
    name: "Ahmed Kabiru",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Systems Engineer",
  },
  {
    name: "Alex Chika",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Web developer",
  },
  {
    name: "Mosimiloluwa Koye Ladele",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Senior analyst",
  },
  {
    name: "Kolanle Ademoju",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Devops engineer",
  },
  {
    name: "Ahmed Kabiru",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Systems Engineer",
  },
  {
    name: "Alex Chika",
    imgUrl: "../../asssets/recruiture-logo-svg.svg",
    testimony:
      " Despite graduating with a first class, I struggled to get a job. EduBridge changed my story. ",
    profession: "Web developer",
  },
];

// html
function htmlIndicatorBtn(active = false) {
  return `
      <span
      data-id="${new Date().getTime() + Math.random()}"
 class="cursor-pointer block h-5 w-5 ${
   active ? "bg-[var(--color-medium-green)]" : "bg-[var(--color-medium-blue)]"
 } rounded-full z-20"></span>
    `;
}

function htmlTestimony(testimony, active = false) {
  const { name, imgUrl, profession, testimony: text } = testimony;
  return `
         <article
         data-id="${new Date().getTime() + Math.random()}"
                class="home__testimonycard ${
                  active
                    ? "home_testimonycard_active"
                    : "home_testimonycard_inactive"
                } rounded-xl p-5 h-max"
              >
                <q
                  class="line__clamp__4 text-[rgba(11,28,44,0.7)] text-[clamp(1rem,1.5vw,1.25rem)] leading-[clamp(1.5rem,2vw,3rem)]"
                >
                  ${text}
                </q>

                <div class="flex items-center space-x-5 mt-5 pt-5 border-t">
                  <span class="h-16 w-16 rounded-full">
                    <img
                      class="rounded-full"
                      src="${imgUrl}"
                      alt="${name}'s picture"
                    />
                  </span>

                  <div>
                    <cite
                      class="text-[#5D646C] text-[clamp(0.9rem,1.4vw,1.18rem)]"
                    >
                     ${name}
                    </cite>
                    <p
                      class="font-extrabold text-[var(--color-medium-blue)] text-[clamp(0.8rem,1.3vw,1.15rem)]"
                    >
                      ${profession}
                    </p>
                  </div>
                </div>
              </article>
    `;
}

export { testimonials, htmlTestimony, htmlIndicatorBtn };