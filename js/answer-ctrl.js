angular.module("answer").controller("AnswerCtrl",
	function ($scope) {
		// All sorts of exciting AngularJS stuff going on here...
		$scope.text =
		"	AngularJS is an open-source JavaScript framework, maintained by Google, that assists with running what are known as single-page applications. Its goal is to augment browser-based applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier. The library reads in HTML that contains additional custom tag attributes; it then obeys the directives in those custom attributes, and binds input or output parts of the page to a model represented by standard JavaScript variables. The values of those JavaScript variables can be manually set, or retrieved from static or dynamic JSON resources. Contents  [hide] 1 The philosophy of Angular 2 Notable Angular directives 3 Two-way data binding 4 Chrome plugin 5 Development history 5.1 Releases 6 Comparisons to Backbone.js 7 See also 8 References 9 Further reading 10 External links [edit]The philosophy of Angular AngularJS is built around the belief that declarative programming should be used for building UIs and wiring software components, while imperative programming is excellent for expressing business logic.[1] The framework adapts and extends traditional HTML to better serve dynamic content through two-way data-binding that allows for the automatic synchronization of models and views. As a result, AngularJS deemphasizes DOM manipulation and improves testability. Design goals: Decouple DOM manipulation from app logic. This improves the testability of the code. Regard app testing as equal in importance to app writing. Testing difficulty is dramatically affected by the way the code is structured. Decouple the client side of an app from the server side. This allows development work to progress in parallel, and allows for reuse of both sides. Guide developers through the entire journey of building an app: from designing the UI, through writing the business logic, to testing. Make common tasks trivial and difficult tasks possible. 	Angular follows the MVC pattern of software engineering and encourages loose coupling between presentation, data, and logic components. Using dependency injection, Angular brings traditional server-side services, such as view-dependent controllers, to client-side web applications. Consequently, much of the burden on the backend is reduced, leading to much lighter web applications.	Contemporary JavaScript libraries, such as AngularJS and Backbone.js, mark the transition of the web from static information pages to interactive and dynamic web applications. By compensating for the limitations of HTML, AngularJS is part of an overall movement that stresses user-centered design on the web, where usability and accessibility of technology is achieved through intuitive interfaces.[dubious – discuss] [edit]Notable Angular directives AngularJS directives allow the developer to specify custom and reusable HTML tags that moderate the behavior of certain elements. ng-app Declares an element as a root element of the application allowing behavior to be modified through custom HTML tags. ng-bind	Automatically changes the text of an HTML element to the value of a given expression. ng-model Similar to ng-bind, but allows two-way data binding between the view and the scope. ng-class Allows class attributes to be dynamically loaded. ng-controller Specifies a JavaScript controller class that evaluates HTML expressions. ng-repeat Instantiate an element once per item from a collection.	ng-show & ng-hide	Conditionally show or hide an element, depending on the value of a boolean expression. ng-switch Conditionally instantiate one template from a set of choices, depending on the value of a selection expression.	ng-view The base directive responsible for handling routes that resolve JSON before rendering templates driven by specified controllers. [edit]Two-way data binding AngularJS' two-way data binding is its most notable feature and reduces the amount of code written by relieving the server backend from templating responsibilities. Instead, templates are rendered in plain HTML according to data contained in a scope defined in the model. The $scope service in Angular detects changes to the model section and modifies HTML expressions in the view via a controller. Likewise, any alterations to the view are reflected in the model. This circumvents the need to actively manipulate the DOM and encourages bootstrapping and rapid prototyping of web applications"
	}
);


