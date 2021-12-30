---
pageClass: projects-page
---

# Projects

<ProjectCard>

### 🧭 Degoogling myself

Google is everywhere, and pretty much everybody uses their services. I do use some of them too, like Google Pay or their search engine.

However, they are a bit too intrusive for my liking. So after browsing some great sites like the [r/degoogle](https://www.reddit.com/r/degoogle/) subreddit and [Privacy Guides](https://www.privacyguides.org/), I took some steps towards restoring my privacy :

- Use [Posteo](https://posteo.de) instead of Gmail for my emails
- Host my [Nextcloud](https://nextcloud.com/) instance at home instead of using Google Drive
- Use Linux distributions like [Pop!\_OS](https://pop.system76.com/) or [EndeavourOS](https://endeavouros.com/) instead of Windows (It's Microsoft but they are privacy invaders too)
- Generally, use open-source alternative to services provided by GAFAMs.

I recommend looking into this, as we are constantly connected to the internet today. Your privacy and your data are precious.

</ProjectCard>

<ProjectCard>

### 📱 Using a rooted Android phone everyday

After having updated all of my computers to highly customizable Linux distros, I was missing the same control on my phone.

To that, the answer was at first, a new phone. I chose the Poco X3 Pro for its good price/performance ratio. I also chose it because it's supported by many custom Android ROMs.

I installed the TWRP recovery, ArrowOS and rooted the device with Magisk. So far, it works great. Here are some of the benefits I get from doing this :

- System wide ad blocking with AdAway
- Fully featured backups with Migrate and Swift Backup
- No manufacturer installed apps that pollutes my phone
- Much better battery life
- No broken apps because of root / custom ROM with Magisk
- Kept the ability to use minimal Google services

However, here are some downsides to expect :

- If my phone has a problem, I may not be able to use its guarantee because of the unlocked bootloader
- Increased vulnerability because of root
- Updating the software is more complicated
- Less stability than the stock configuration

But overall, I love it.

You can learn more about my rooting process on my [Notion page](https://terencech.notion.site/Modding-Poco-X3-Pro-60746cf2824b45e5b7c776ca95eaf0ee).

</ProjectCard>

<ProjectCard>

### 🧪 Building my homelab

It all began in March 2019 when I bought my first Raspberry Pi, a 3B+ model. There, I tried with more or less success to host my own Node.js + React website, asking myself questions like "How can I tell my Node server to listen on port 80 ?". I also bought my first domain name, so that I could serve my site like a pro.

I learned a lot about server management, networking and also that without any cooling, the Pi can run pretty hot 🥵.

I then discovered Nextcloud, the free and open-source Google Drive. The idea of being in control of my data really appealed to me, so I set my Raspberry up to the task. However, I quickly came to the realization that 1GB of memory were not going to be enough for a fully fledged cloud storage server.

I went to buy the Raspberry Pi 4 model with 4GB of memory and it was much better. I was also learning about containers at the time so I went on and Dockerized my Nextcloud instance. With that, I setup a nightly backup to Backblaze B2 usign [Duplicati](https://www.duplicati.com/), an amazing backup software that I still use.

In 2020, my ISP updated their network configuration to provide internet boxes with CGNAT. It meant that I had lost my dedicated public IP ! No more homelab... Until I found a solution that I'm pretty proud of.

It uses two tools that I will briefly introduce :

- NginX, a powerful web server and load balancer
- Wireguard, the future of VPNs
- A cheap VM from any cloud provider

The plan was :

- On the VM
  - Open 80 and 443 ports on the machiine and the firewall
  - Setup a Wireguard VPN connection, with the VM being the server and the client being my Pi
    - You can follow this tutorial [here](https://www.wireguard.com/quickstart/), it's dead easy
    - Enable IP forwarding in the Wireguard configuration
  - Setup NginX to listen on ports 80 and 443 as a L4 load balancer using streams
    - Redirect the traffic to the Wireguard IP given to the client
    - Here are the [docs](https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/)

That way, I could receive public traffic on my Raspberry Pi and redirect it so that I could still access my Nextcloud instance from anywhere !

Then came the time when I had bigger ambitions. After discovering cloud technologies, and especially Kubernetes, I wanted to experiment, and for that I fugred that a bigger machine was necessary. I bought a Lenovo ThinkCentre M75q-1 off of Leboncoin and setup a single-node cluster using Kubeadm.

Today, it's fully managed by ArgoCD and mainly serves as a sandbox. Here are the apps I currently host :

- NginX ingress controller, to setup ingresses
- MetalLB, to setup LoadBalancer services on a bare-metal cluster
- Certmanager, to generate Let's Encrypt TLS certificates
- External DNS, to create records in my DNS zone
- GitLab runner, to run some CI/CD jobs
- Longhorn, to dynamically manage PV provisioning
- Pihole, to use as my own DNS server
- OAuth2 proxy, to protect all my services with GitLab SSO
- ArgoCD, to deploy everything the GitOps way

</ProjectCard>

# Hobbies

<ProjectCard>

### ✏️ Blogging

At Padok, everybody writes articles on the [DevOps blog](https://www.padok.fr/blog). I wrote two articles which are :

- A guide on how to setup Nextcloud at home using Docker - [Link](https://www.padok.fr/blog/nextcloud-docker)
- A guide on how to backup your dotfiles using Git and RCM - [Link](https://www.padok.fr/en/blog/backup-dotfiles-git-rcm)

Go ahead and read them if the topics sound appealing to you !

</ProjectCard>

<ProjectCard>

### 🎥 YouTube

There is some amazing content on YouTube, and I would like to share some of my favorite channels in no particular order :

- [Sumsub](https://www.youtube.com/channel/UCVraU9wuIQr8H1B0kcUD7Tw) - Online privacy
- [The Straight Pipes](https://www.youtube.com/user/TheStraightPipes) - Great car reviews
- [Mental Outlaw](https://www.youtube.com/c/MentalOutlaw) - Tech and Open Source advocacy
- [Vilebrequin](https://www.youtube.com/channel/UCC9mlCpyisiIpp9YA9xV-QA) - Terrible car reviews
- [TaeKeyboards](https://www.youtube.com/channel/UCllGwtW6scxAjM28fIgEozg) - Keyboard reviews
- [Channel 5](https://www.youtube.com/channel/UC-AQKm7HUNMmxjdS371MSwg) - Social studies on american culture
- [Code Bullet](https://www.youtube.com/channel/UC0e3QhIYukixgh5VVpKHH9Q) - Cool AI projects
- [Smells Like GASOLINE](https://www.youtube.com/user/Absolution00216) - Old cars restoration
- [The Retro Future](https://www.youtube.com/channel/UCefAbzsWZE4uXU-mqQMrr4Q) - Retro gaming restoration
- [Computerphile](https://www.youtube.com/user/Computerphile) - Computer history and vulgarization
- [Joueur du Grenier](https://www.youtube.com/user/joueurdugrenier) - Retro game reviews
- [ADVChina](https://www.youtube.com/user/churchillcustoms) - Two guys on bikes talking about chinese culture
- [Linus Tech Tips](https://www.youtube.com/user/LinusTechTips) - Tech tips
- [Bismuth](https://www.youtube.com/user/BismuthWasTaken) and [Summoning Salt](https://www.youtube.com/channel/UCtUbO6rBht0daVIOGML3c8w) - Awesome speedrun breakdowns
- [MoistCr1TiKal](https://www.youtube.com/user/penguinz0) - Spice expert
- [Micode](https://www.youtube.com/channel/UCYnvxJ-PKiGXo_tYXpWAC-w) and [Underscore](https://www.youtube.com/channel/UCWedHS9qKebauVIK2J7383g) - Tech stuff
- [Sylvqin](https://www.youtube.com/channel/UCseGV3amBLISlIOMQodPfVQ) - Internet oddities

</ProjectCard>

<style lang="stylus">

.projects-page
  background-color #fafbfc
.page
  padding-bottom 0

</style>
