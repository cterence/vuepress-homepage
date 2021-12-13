---
pageClass: home-page
# some data for the components

name: Térence Chateigné
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/cterence
  - title: gitlab
    icon: "/icons/gitlab.svg"
    link: https://gitlab.com/terencec
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/terencechateigne/in/terencechateigne

cv: https://cv.terence.cloud
bio: SRE at Padok
email: terence.chateigne(at)posteo(dot)net
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About me

I'm an Engineer in Computer Science, specialized in Cloud and Infrastructure. I work as a Site Reliability Engineer at [Padok](https://padok.fr) since February 2021.

I'm a tech person. I love tinkering on the systems I own and use everyday. My favorite tech topics are : hacking, infrastructure-as-code, containers, blockchain and open source software.

My hobbies include : building mechanical keyboards, solving Rubik's cubes, digging into obscure music genres and practicing archery.

Feel free to check out my [Sens Critique](https://www.senscritique.com/Diluvio) profile, we may like something in common.

## Education & Experiences

### Work

- 💻 **SRE at Padok** <br/>
  Building and maintaining cloud infrastructures. <br/>
  Tools : AWS, Terraform, Kubernetes, GitLabCI. <br/>
  Internship during 6 month, working full-time since Sept. 2021. <br/>
  Full-time | Feb. 2021 - Today | [Website](https://padok.fr)

- 💻 **Full-stack Developer at Pricemoov** <br/>
  Web development and data engineering. <br/>
  I continued working on the same topics as a freelance during 4 months after my internship. <br/>
  Tools : React.js, TypeScript, Django, Dataiku. <br/>
  Internship | Aug. 2019 - Feb. 2020 | [Website](https://pricemoov.com)

- 💻 **Software Developer intern at Idemia** <br/>
  Web and application development for identity projects. <br/>
  Tools : JavaScript, Node.js, C#. <br/>
  Internship | Apr. 2018 - June 2018 | [Website](https://idemia.com)

### Studies

- 🇫🇷 **University of Technology of Compiègne** <br/>
  Engineering Degree in Computer Science, specialized in Systems and Networks. <br/>
  Topics : cyber-resilience, networks, algorithms, data analysis, web development. <br/>
  2018 - 2021 | [Website](https://www.utc.fr)

- 🇫🇷 **IUT of Villetaneuse** <br/>
  Technology degree in Computer Science <br/>
  Topics : programming, OOP, web development, economics, mathematics. <br/>
  2016 - 2018 | [Website](https://iutv.univ-paris13.fr)

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  padding-bottom 0
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
