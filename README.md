

---

Example [11ty] website using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation https://docs.gitlab.com/ce/user/project/pages/.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab][ci], following the steps 
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml).

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] 11ty
1. Preview your project: `npx @11ty/eleventy --serve`
1. Add content
1. Generate the website: `npx @11ty/eleventy` (optional)

Read more at 11ty's [documentation][]

### Preview your site

If you clone or download the project to your local computer
and run `npx @11ty/eleventy --serve`, your site can be
accessed under `localhost:8080/` (8080 is the default but 
it’ll bump to a new port if that one is taken, so use whatever 
port shows up when you run the --serve command).


## GitLab User or Group Pages

To use this project as your user/group website, you will need
one additional step: just rename your project to `namespace.gitlab.io`,
where `namespace` is your `username` or `groupname`. This can be
done by navigating to your project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be 
necessary unles you want to contribute back to the upstream project.

[ci]: https://about.gitlab.com/gitlab-ci/
[11ty]: https://www.11ty.dev
[install]: https://www.11ty.dev/docs/getting-started/
[documentation]: https://www.11ty.dev/docs/getting-started/
[userpages]: http://doc.gitlab.com/ee/pages/README.html#user-or-group-pages
[projpages]: http://doc.gitlab.com/ee/pages/README.html#project-pages



