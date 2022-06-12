# Notification Component

The notification component is based on a item to show overtop of all other components in a site. This is styled based on TailwindUI.

This supports the ability to be manually cleared and/or auto dismissed based on a given wait time.

## Attributes

|  Attribute   |  Type   | Default | Details | Syntax |
|--------------|---------|---------|---------|--------|
| entering     | Array   |   ""    |  Detail classes for entering base  | `data-notification-entering-class="transform ease-out duration-300 transition"` |
| enteringTo   | Array   |   ""    |  Detail classes for entering to    | `data-notification-entering-to-class="translate-y-0 opacity-100 sm:translate-x-0"` |
| enteringFrom | Array   |   ""    |  Detail classes for entering from  | `data-notification-entering-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"` |
| leaving      | Array   |   ""    |  Detail classes for leaving base   | `data-notification-leaving-class="transition ease-in duration-100"` |
| leavingTo    | Array   |   ""    |  Detail classes for leaving to     | `data-notification-leaving-to-class="opacity-0"` |
| leavingFrom  | Array   |   ""    |  Detail classes for leaving from   | `data-notification-leaving-from-class="opacity-100"` |
| autoDismiss  | Boolean |  false  |  Used to activate a notification to auto dismiss | `data-notification-auto-dismiss-value="true"` |
| dismissAfter | Number  |   ""    |  Used in compainion to autoDismiss to indicate when to auto hide | `data-notification-dismiss-after-value="4000"` |
| enterTimeout | Number  |  1000   |  Used to change the animation of the notification appearing | `data-notification-enter-timeout-value="1200"` |
| leaveTimeout | Number  |  1000   |  Used to change the animation of the notification leaving  | `data-notification-leave-timeout-value="1200"` |

## Functions

| Function | Details | Syntax |
|----------|---------|--------|
| close()  | This close button with dismiss the notification and remove it from the DOM | `data-action="notification#close"` |

## Usage

### Simple Usage

#### With Auto Dismiss Enabled & Manual Dismiss Enabled

```html
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
            <p class="mt-1 text-sm text-gray-500">I am a Notification with Auto Dismiss and Manual Dismiss</p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button data-action="notification#close" type="button" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### Without Auto Dismiss Enabled & Manual Dismiss Enabled

```html
<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    <div data-controller="notification"
        data-notification-target="container"
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
            <p class="mt-1 text-sm text-gray-500">I am a Notification< without Auto Dismiss and with Manual Dismiss/p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button data-action="notification#close" type="button" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### With Auto Dismiss and no Manual Dismiss

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

### View Component Example with Rails

```html
./app/components/notification.html.erb

<div data-controller="notification"
    data-notification-target="container"
    data-notification-auto-dismiss-value="<%= auto_dismiss %>"
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
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 <%= TYPES[type][:color] %>" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <% if  TYPES[type][:icon] == "error" %>
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <% end %>
            <% if  TYPES[type][:icon] === "success" %>
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <% end %>
        </svg>
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium text-gray-900"><%= TYPES[type][:label] %></p>
        <p class="mt-1 text-sm text-gray-500"><%= content %></p>
      </div>
      <div class="ml-4 flex-shrink-0 flex">
        <button data-action="notification#close" type="button" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
          <span class="sr-only">Close</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
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

```html
./app/views/layout/refs/_navigation.html.erb

<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    <% flash.each do |type, msg| %>
      <%= render(NotificationComponent.new(type: type.to_sym, auto_dismiss: false )) do %>
        <%= msg %>
      <% end %>
    <% end %>
  </div>
</div>
```

```html
./app/views/layout/application.html.erb

<!DOCTYPE html>
<html>
  <head>
    <title>Example App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "tailwind", "inter-font", "data-turbo-track": "reload" %>

    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
    <%= javascript_importmap_tags %>
  </head>

  <body>
    <main class="container mx-auto mt-28 px-5 flex">
      <%= yield %>
    </main>
    <%= render "layouts/refs/notifications" %>
  </body>
</html>

```
