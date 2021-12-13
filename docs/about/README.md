---
pageClass: about-page
description: "The biography and information about me."
avatar: /profile.jpg
head: "Térence Chateigné"
info: "SRE at Padok"
interests: ""
socials:
  - title: github
    link: https://github.com/cterence
    icon: "/icons/github.svg"
  - title: gitlab
    link: https://gitlab.com/terencech
    icon: "/icons/gitlab.svg"
  - title: linkedin
    link: https://www.linkedin.com/in/terencechateigne
    icon: "/icons/linkedin.svg"
actions:
  - text: Projects
    link: /projects/
  - text: CV
    link: https://cv.terence.cloud
---

<AboutCard :frontmatter="$page.frontmatter" >

I'm an Engineer in Computer Science, specialized in Cloud and Infrastructure. I work as a Site Reliability Engineer at [Padok](https://padok.fr) since February 2021.

I'm a tech person. I love tinkering on the systems I own and use everyday. My favorite tech topics are : hacking, infrastructure-as-code, containers, blockchain and open source software.

My hobbies include : building mechanical keyboards, solving Rubik's cubes, digging into obscure music genres and practicing archery.

Feel free to check out my [Sens Critique](https://www.senscritique.com/Diluvio) profile, we may like something in common.

---

<center> This site was generated with the <a href="https://github.com/cterence/vuepress-homepage" target="_blank">vuepress-homepage</a> project and automatically deployed using Github Actions. </center>

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  padding-bottom 0
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>
