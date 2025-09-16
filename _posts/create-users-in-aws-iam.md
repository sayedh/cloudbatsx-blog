---
    title: "Create Users in AWS IAM"
    excerpt: "Creating users allows you to assign specific privileges while blocking other AWS features"
    coverImage: "/images/image-27.png"
    date: "2022-06-26T00:00:00.000Z"
    author:
        name: Sayed Haque
        picture: "/assets/blog/authors/sayed.jpg"
    ogImage:
        url: "/images/image-27.png"
---

New user creation is always a good thing for AWS account. You don not want to get use to using the Root account all the time. Creating users allows you to assign specific privileges to the user while all other access to AWS features are blocked.

Today we are going to create a user that will typically be used for configuring the AWS CLI.

Here we go!

Open you AWS management console and go to the IAM page.

![](/images/image-27.png)

Once at the IAM page, click Users at the left

On the top right click Add Users

![](/images/image-26.png)

Add a user name and select Programmatic Access, then click Next: Permissions

![](/images/image-29.png)

Here you can get fancy and assign what you think is necessary.  
For my AWS CLI setup, I am going to select the option "Attach existing policies directly" and choose to assign Full DynamoDB access.

Once done, click Next: Tags

![](/images/image-30.png)

We will skip the Tags page and move on with Next: Review

![](/images/image-31.png)

Now you can review the details and click Create User

![](/images/image-32.png)

On the next page it will show the User, Access Key, and Secret Access Key.

These you must keep safe, as anyone with these keys will be able to access that account. Here is an example: (don't worry, I deleted this users from my account)

![](/images/image-33.png)

CONGRATS!! Now you have a user setup on your account.

Check out how I use this user with my AWS CLI.

https://cloudbats.com/2022/06/28/install-and-configure-aws-cli-on-your-computer/
