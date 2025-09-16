---
    title: "Setup a Wordpress Site using AWS Lightsail"
    excerpt: "Creating users allows you to assign specific privileges while blocking other AWS features"
    coverImage: "/images/image-12-1024x345.png"
    date: "2022-06-13T00:00:00.000Z"
    author:
        name: Sayed Haque
        picture: "/assets/blog/authors/sayed.jpg"
    ogImage:
        url: "/images/image-12-1024x345.png"
---

Setting up a Wordpress can seem very daunting. Do you need to buy a computer and install the wordpress on there and serve your website from home?

Well AWS provides an industry grade server with such a level of reliability, features, and redundancy you wouldn't think twice but only choose AWS for your Wordpress site. Additionally you can get setup within a day!

Lets show you how:

Log into your AWS console and search Lightsail in the top search bar.

![](images/image-12-1024x345.png)

Once at the homepage of Lightsail, click Create instance with the Instances tab.

![](images/image-13-1024x610.png)

Now choose your the region that is closest to you.

![](images/image-14-1024x611.png)

Next choose Linux for the "Select a platform" section and Wordpress in the "Select a blueprint" section.

![](images/image-15-1024x574.png)

Choose that instance plan according to your needs. If you are just getting started, maybe you can choose the cheapest option.

![](images/image-16-1024x613.png)

Specify the instance name and click Create Instance.

![](images/image-17-1024x512.png)

Great! You just created a Wordpress instance!

You can view your instance on the web using the IP address provided on the homepage of Lightsail.

![](images/image-18-1024x433.png)

Type in that IP address into your browser to see how your website looks!

For me it is 34.213.9.178.

So I searched this in my browser and this is what I got

![](images/image-19-1024x889.png)

Now we need to get the username and password for our website so we can start creating our content.

Go to your Lightsail homepage, under Instances, you will see your instance. Click that orange box icon on the top right.

This will open a terminal to your instance.

![](images/image-20-950x1024.png)

Now you can get the password of your website using the following command:

cat $HOME/bitnami\_application\_password

Paste that command into your terminal and it will spit out a password.

![](images/image-21-1024x885.png)

Copy that password and in your browser type in the IP address and add /wp-admin after.  
  
This is how I did it

![](images/image-22-1024x76.png)

You should land on a page that shows a login box like this

![](images/image-23.png)

Type in user for the Username and put in the password we copied from the terminal

![](images/image-24.png)

Log in and you should see the Wordpress Admin console. This is where you can change your website theme, details, and all other features. This is the same place where you can manage posts, pages, and users.

![](images/image-25-1024x989.png)

Congrats! You have done it. You have just started your website and have awesome tools to customize it as you wish.

Also please do update your password and user, for your safety.
