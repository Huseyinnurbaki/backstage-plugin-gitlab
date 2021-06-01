# Work In Progress 

# gitlab

Welcome to the gitlab plugin!


Lists jobs of given project.
Currently supports single Gitlab host.


# Quickstart


```console
$yarn install @hhaluk/backstage-plugin-gitlab
```

## CONFIGURATION



```yaml
....
gitlab:
  baseUrl: <HOST>
  accessToken: 
    $include: <YOUR_TOKEN>
....
```


```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  description: |
    Backstage is an open-source developer portal that puts the developer experience first.
  annotations:
    gitlab/projectID: <YOUR_PROJECT_ID>
spec:
  type: library
  owner: CNCF
  lifecycle: experimental
```


