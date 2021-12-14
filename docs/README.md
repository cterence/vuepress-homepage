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

## 👦 About me

I'm an Engineer in Computer Science, specialized in Cloud and Infrastructure. I work as a Site Reliability Engineer at [Padok](https://padok.fr) since February 2021.

I'm a tech person. I love tinkering on the systems I own and use everyday. My favorite tech topics are : hacking, infrastructure-as-code, containers, blockchain and open source software.

My hobbies include : building mechanical keyboards, solving Rubik's cubes, practicing archery and digging into obscure music genres.

Feel free to check out my [Sens Critique](https://www.senscritique.com/Diluvio) profile, we may like something in common.

## 🔧 Skills

### Cloud

<div class="skills">
<img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" alt="AWS" />
<img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" alt="K8S" />
<img class="logo" src="https://ci.linagora.com/uploads/-/system/project/avatar/3393/gitlab-ci-cd-logo_2x.png" alt="GitlabCI" />
<img class="logo" src="https://i.pinimg.com/originals/28/ec/74/28ec7440a57536eebad2931517aa1cce.png" alt="Terraform" />
<img class="logo" src="https://cncf-branding.netlify.app/img/projects/argo/stacked/color/argo-stacked-color.png" alt="ArgoCD" />
</div>

### Programming

<div class="skills">
  <img class="logo" src="http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" alt="Python" />
  <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="NodeJS" />
  <img class="logo" src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" alt="Golang" />
  <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP" />
</div>

## 🌠 Education & Experiences

### 👨‍🏭 Work

- 💻 **SRE at Padok**

  Building and maintaining cloud infrastructures.  
  Tools : AWS, Terraform, Kubernetes, GitLabCI.  
  Internship during 6 month, working full-time since Sept. 2021.  
  Full-time | Feb. 2021 - Today | [Website](https://padok.fr)

- 💻 **Full-stack Developer at Pricemoov**

  Web development and data engineering.  
  I continued working on the same topics as a freelance during 4 months after my internship.  
  Tools : React.js, TypeScript, Django, Dataiku.  
  Internship | Aug. 2019 - Feb. 2020 | [Website](https://pricemoov.com)

- 💻 **Software Developer intern at Idemia**

  Web and application development for identity projects.  
  Tools : JavaScript, Node.js, C#.  
  Internship | Apr. 2018 - June 2018 | [Website](https://idemia.com)

### 🎓 Studies

- 🇫🇷 **University of Technology of Compiègne**

  Engineering Degree in Computer Science, specialized in Systems and Networks.  
  Topics : cyber-resilience, networks, algorithms, data analysis, web development.  
  2018 - 2021 | [Website](https://www.utc.fr)

- 🇫🇷 **IUT of Villetaneuse**

  Technology degree in Computer Science.  
  Topics : programming, OOP, web development, economics, mathematics.  
  2016 - 2018 | [Website](https://iutv.univ-paris13.fr)

<!-- Custom style for this page -->

<style lang="stylus">

body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif

.skills
  display flex
  align-items center
  justify-content space-around
  margin-top 10px

.skill
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  margin-top 10px

.logo
  width 100px

.theme-container.home-page .page
  background-color #fafbfc
  padding-bottom 0
  font-size 16px
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
  .logo
    width 50px
  .info
    font-size 14px
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
