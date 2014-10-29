angularjs-directive
===================

Step by Step instructions for creating a basic AngularJS custom directive.  This tutorial is intended for a beginner level audience.  For a comprehensive guide to AngularJS directives visit https://docs.angularjs.org/guide/directive .

In this tutorial you will be building a simple truncate/expand directive that takes a paragraph longer than a given length and truncates it, adding a "..." as well as "show more/show less" links for expanding and closing the text.


## Clone the repository:
	git clone https://github.com/kipernicus/angularjs-directive.git

The completed solution is in the 'master' branch.  To see it in action deploy the code to your server of choice and view index.html.

## Getting Started:

In this tutorial, we'll use a series of git branches to represent each step of the process of building a custom directive from the ground up.  To get started go to the root of the project and execute:

	git checkout step-0

Here you'll see an HTML file with a simple AngularJS controller that injects a text block into a paragraph.  Let's get started creating our directive!

## Create the Directive:

	git checkout step-1

In this guide we denote the updates that come with each step with a comment containing the string "NEW:".  Therefore, if you search the project for the string "NEW:" you can see what has changed in each step.

The first step is to create the directive by creating a new file 'expand-text.js' with the following code:

	angular.module("answer", []).directive("expandText", function() { ... }

This defines a new directive called "expandText" on our Answer module.  The second argument is a function which returns a JSON object (called the "Directive Definition Object") that defines the directive.  To start out we define the following fields:

**restrict:** This defines whether the directive will be an attribute ('A'), an element ('E'), or a class ('C').  In this case we're going to use an attribute.

**template:** This defines the reusable HTML that will be inserted in the place of the directive.  Note that at this point all we are doing is italicizing what is passed to the directive.

**replace:** Determines whether or not to replace the directive's element.  Note that this has been deprecated and is currently scheduled for removal in version 2.0.  For discussion on the topic see http://stackoverflow.com/questions/24194972/why-is-replace-deprecated-in-angularjs.

After creating the 'expand-text.js' file with our directive definition we import that file into our html and add the directive attribute.  Note that the directive definition uses camelCase whereas the usage of the directive in the HTML is snake_case.

## Add linking function and truncation ##

	git checkout step-2

A directive that just italicizes text isn't very cool so let's go ahead and start truncating.  In this step we add a truncation function that truncates the text at 100 characters.  We utilize this function by adding a **link** field to the Directive Definition Object.

The **link** function is used when we need to do something in our directive to manipulate the DOM.  For further explanation see https://docs.angularjs.org/guide/directive#creating-a-directive-that-manipulates-the-dom.

## Adding a custom maxlength attribute ##

	git checkout step-3

What if we don't want to always truncate at 100 characters?  What if we'd like to truncate at 200?  Or 400?  Here we add a custom attribute to our directive to allow us to do just that.

In the html where we call our directive we add a 'data-max-length' attribute (we could have also used just 'max-length' if we weren't trying to be HTML compliant) on the same element as the directive.  If we were using an element instead of an attribute for our custom directive we would just add the attribute to the directive element.

Next we add some code to our link function to access the attribute.  It is available via the "attributes" argument passed to the function.  Notice again the camelCase in the directive definition and the snake_case in the HTML.

## Adding 'Show More / Show Less' links ##

	git checkout step-4

We don't want to just truncate the text, we want to hide it so the user can expand and unexpand (is that a word?) at will.  To do so we update our truncating function and add new scope objects to our link function.

Here we see that we can add items to the scope and use two-way binding in a custom directive just as we do in controllers.  We can also use other directives (ng-show, ng-hide, etc.) within a directive definition.

## Creating an isolated scope ##

	git checkout step-5

We're almost done, but we've got a few problems.  We want our directive to be reusable across all our pages and websites.  But what happens if we add it to page that doesn't happen to have a variable named "text" in the page scope?  Death!!

We can't have that - we want consumers of our directive to use whatever variable names they'd like.  We've got another problem - what if a page wants to use something besides the Strings "Show More" and "Show Less"?  Maybe we want to use "Expand" and "Unexpand" (Pretty sure that **isn't** a word).  Or worse yet, what if we this directive to work in any language?  We don't want to create a new copy of the directive for each language.

Fortunately both of these problems can be solved using the 'scope' field of the Directive Definition Object.  This creates an isolated scope for this directive, effectively decoupling it from the page scope.  For two way binding with a page scope object use the '=' prefix.  For passing in String use the '@' prefix.  For a more in depth discussion of directive scopes see http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope .

## Placing directive template in its own file ##

	git checkout step-6

We now have a fully-functional, reusable, i18n-ready custom directive.  However, our **template** field in our Directive Definition Object is kind of a mess.  In this final step we move it into it's own HTML file by using **templateUrl** instead.  For anything but the simplest of directives this is considered a best practice.  For the performance-wise developers concerned about an extra HTTP request there are tools available that will compile HTML templates into the **template** form to give you the best of both worlds.