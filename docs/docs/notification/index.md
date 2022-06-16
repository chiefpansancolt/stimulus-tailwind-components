---
layout: content
title: Stimulus Tailwind Components - Notifications
header: Notification
subheader: Notification Component
details: The notification component is based on a item to show overtop of all other components in a site. This is styled based on TailwindUI. This supports the ability to be manually cleared and/or auto dismissed based on a given wait time.
permalink: /docs/notification
previousName: Installation
previousLink: /docs/installation
nextName: Theme
nextLink: /docs/theme
---

## Playground

Want to see them in action? Check out the examples [here]({{ site.links.playground.notification | relative_url }}) for the ability to play with notifications.

## Attributes

### Targets

| Attribute | Type   | Required | Details                                               | Syntax                                 |
| --------- | ------ | -------- | ----------------------------------------------------- | -------------------------------------- |
| container | String | true     | Target for the container of the Notification instance | `data-notification-target="container"` |

### Classes

| Attribute    | Required | Details                          | Syntax                                                                                              |
| ------------ | -------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| entering     | true     | Detail classes for entering base | `data-notification-entering-class="transform ease-out duration-300 transition"`                     |
| enteringTo   | true     | Detail classes for entering to   | `data-notification-entering-to-class="translate-y-0 opacity-100 sm:translate-x-0"`                  |
| enteringFrom | true     | Detail classes for entering from | `data-notification-entering-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"` |
| leaving      | true     | Detail classes for leaving base  | `data-notification-leaving-class="transition ease-in duration-100"`                                 |
| leavingTo    | true     | Detail classes for leaving to    | `data-notification-leaving-to-class="opacity-0"`                                                    |
| leavingFrom  | true     | Detail classes for leaving from  | `data-notification-leaving-from-class="opacity-100"`                                                |

### Values

| Attribute    | Type    | Default | Required                       | Details                                                         | Syntax                                         |
| ------------ | ------- | ------- | ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------- |
| autoDismiss  | Boolean | false   | false                          | Used to activate a notification to auto dismiss                 | `data-notification-auto-dismiss-value="true"`  |
| dismissAfter | Number  | ""      | true if autoDismiss is enabled | Used in compainion to autoDismiss to indicate when to auto hide | `data-notification-dismiss-after-value="4000"` |
| enterTimeout | Number  | 1000    | false                          | Used to change the animation of the notification appearing      | `data-notification-enter-timeout-value="1200"` |
| leaveTimeout | Number  | 1000    | false                          | Used to change the animation of the notification leaving        | `data-notification-leave-timeout-value="1200"` |

## Methods

### Actions

| Function | Details                                                                    | Syntax                             |
| -------- | -------------------------------------------------------------------------- | ---------------------------------- |
| close()  | This close button will dismiss the notification and remove it from the DOM | `data-action="notification#close"` |

---

## Basic Usage

The Notification Component supports the ability to define the entering and exiting affect that the element goes trough showing and hiding. This also supports the ability to auto dismiss the notification after x amount of milliseconds and the ability to click a button to dismiss the notification. When a notification is dismissed via Manual or Auto it will remove the notification from the DOM.

### Option #1

This option supports the following options:

- [x] Manual Dismiss
- [x] Auto Dismiss

```html
<div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
  <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
    <div
      data-controller="notification"
      data-notification-target="container"
      data-notification-auto-dismiss-value="true"
      data-notification-dismiss-after-value="4000"
      data-notification-entering-class="transform ease-out duration-300 transition"
      data-notification-entering-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      data-notification-entering-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      data-notification-leaving-class="transition ease-in duration-100"
      data-notification-leaving-to-class="opacity-0"
      data-notification-leaving-from-class="opacity-100"
      class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">Successfully!</p>
            <p class="mt-1 text-sm text-gray-500"> I am a Notification with Auto Dismiss and Manual Dismiss </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              data-action="notification#close"
              type="button"
              class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Option #2

This option supports the following options:

- [x] Manual Dismiss
- [ ] Auto Dismiss

```html
<div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
  <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
    <div
      data-controller="notification"
      data-notification-target="container"
      data-notification-entering-class="transform ease-out duration-300 transition"
      data-notification-entering-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      data-notification-entering-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      data-notification-leaving-class="transition ease-in duration-100"
      data-notification-leaving-to-class="opacity-0"
      data-notification-leaving-from-class="opacity-100"
      class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">Successfully!</p>
            <p class="mt-1 text-sm text-gray-500"> I am a Notification< without Auto Dismiss and with Manual Dismiss/p> </p>
          </div>

          <div class="ml-4 flex flex-shrink-0">
            <button
              data-action="notification#close"
              type="button"
              class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Option #3

This option supports the following options:

- [ ] Manual Dismiss
- [x] Auto Dismiss

```Html
<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    <div data-controller="notification"
        data-notification-target="container"
        data-notification-auto-dismiss-value="true"
        data-notification-dismiss-after-value="4000"
        data-notification-entering-class="transform ease-out duration-300 transition"
        data-notification-entering-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        data-notification-entering-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        data-notification-leaving-class="transition ease-in duration-100"
        data-notification-leaving-to-class="opacity-0"
        data-notification-leaving-from-class="opacity-100"
        class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">Successfully!</p>
            <p class="mt-1 text-sm text-gray-500">I am a Notification with Auto Dismiss and without Manual Dismiss</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## View Component Usage

In Rails you can use a gem called View Components to enable the ability to template components usage. Check out [View Components](https://viewcomponent.org) site for further details on how to setup in your Rails project.

### Notification Component

```html
./app/components/notification.html.erb

<div
  data-controller="notification"
  data-notification-target="container"
  data-notification-auto-dismiss-value="<%= auto_dismiss %>"
  data-notification-dismiss-after-value="4000"
  data-notification-entering-class="transform ease-out duration-300 transition"
  data-notification-entering-to-class="translate-y-0 opacity-100 sm:translate-x-0"
  data-notification-entering-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
  data-notification-leaving-class="transition ease-in duration-100"
  data-notification-leaving-to-class="opacity-0"
  data-notification-leaving-from-class="opacity-100"
  class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
>
  <div class="p-4">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="<%= TYPES[type][:color] %> h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <% if TYPES[type][:icon] == "error" %>
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <% end %> <% if TYPES[type][:icon] === "success" %>
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <% end %>
        </svg>
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-gray-900"><%= TYPES[type][:label] %></p>
        <p class="mt-1 text-sm text-gray-500"><%= content %></p>
      </div>
      <div class="ml-4 flex flex-shrink-0">
        <button
          data-action="notification#close"
          type="button"
          class="inline-flex rounded-md bg-white text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="sr-only">Close</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
```

```ruby
./app/components/notification_component.rb

class NotificationComponent < ViewComponent::Base
  TYPES = {
    notice: {
      color: "text-green-500",
      icon: "success",
      label: "Successful!"
    },
    alert: {
      color: "text-red-500",
      icon: "error",
      label: "Error Occured!"
    }
  }.freeze

  def initialize(type:, auto_dismiss:) # rubocop:disable Lint/MissingSuper
    @type = type
    @auto_dismiss = auto_dismiss
  end

  attr_reader :type, :auto_dismiss
end
```

```erb
./app/views/layout/refs/_navigation.html.erb

<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    <% flash.each do |type, msg| %> <%= render(NotificationComponent.new(type: type.to_sym, auto_dismiss: false )) do %> <%= msg %> <% end %> <% end %>
  </div>
</div>
```

```erb
./app/views/layout/application.html.erb

<!DOCTYPE html>
<html>
  <head>
    <title>Example App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <%= csrf_meta_tags %> <%= csp_meta_tag %> <%= stylesheet_link_tag "tailwind", "inter-font", "data-turbo-track": "reload" %> <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>

  <body>
    <main class="container mx-auto mt-28 px-5 flex"><%= yield %></main>
    <%= render "layouts/refs/notifications" %>
  </body>
</html>
```
