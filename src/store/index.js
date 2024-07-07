import { createStore } from 'vuex'
import HTTP from '@/axios/index.js'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const store = createStore({
    state () {
      return {
        authadmin: null,
      }
    },

    // mutations
    mutations: {
        set_admin_token(state, user) {
            state.authadmin = user;
        },
    },

    // actions
    actions: {
      // admin
      async set_admin_token(context , token){
        const { data: admin } = await HTTP.get('/admin/auth/admin' , {
          headers: { Authorization: "Bearer " + token }
        })

        if (admin) {
            if (Object.keys(admin).length != 0) {
                context.commit('set_admin_token', admin)
            } else {
                context.commit('set_admin_token', null)
            }
        }else{
          this.$router.push('/')
        }
      },
      async do_admin_login(context , data){
        const adminLogin = await HTTP.post('/admin/auth/login' , data);
        if(adminLogin.data.errors){
          return adminLogin.data.errors;
        }else{
          return adminLogin.data;
        }
      },

      async do_logout_admin(context){
        const send_for_logout = await HTTP.post('/admin/auth/logout' , {} , {
          headers: { Authorization: "Bearer " + cookies.get("_token") }
        })

        return send_for_logout;
      },

      // donations
      async get_donations_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/donations/list" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_donation(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/donations/get-by-id" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      // categories
      async get_categories_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/categories/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async save_category(context , cat_data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/categories/save", cat_data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_category_by_id(context , catObj) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/categories/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: catObj
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_cat(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/categories/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },
      
      async edit_category(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/categories/edit", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      // news
      async save_news_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        formData.append("date" , data.date)
        formData.append("author_id" , data.author_id)
        formData.append("category_ids" , data.category_ids)
        formData.append("image" , data.image)
        formData.append("content" , data.content)
        formData.append("summary_description" , data.summary_description)
        formData.append("seo_image" , data.seo_image)
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)


        const result = await HTTP.post("/admin/news/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_news_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/news/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async change_news_special_state(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/news/special", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_list_of_news(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/news/del-group", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_news(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/news/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_news_detail(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/news/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async edit_news_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("id" , data.id)
        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        formData.append("date" , data.date)
        formData.append("author_id" , data.author_id)
        formData.append("category_ids" , data.category_ids)
        if(data.image != '') {
          formData.append("image" , data.image)
        }
        formData.append("content" , data.content)
        formData.append("summary_description" , data.summary_description)
        if(data.seo_image != '') {
          formData.append("seo_image" , data.seo_image)
        }
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)


        const result = await HTTP.post("/admin/news/edit", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      // mostanadat
      async save_mostanad_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        formData.append("date" , data.date)
        formData.append("author_id" , data.author_id)
        formData.append("image" , data.image)
        formData.append("content" , data.content)
        formData.append("summary_description" , data.summary_description)
        formData.append("seo_image" , data.seo_image)
        formData.append("video" , data.video)
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)


        const result = await HTTP.post("/admin/mostanad/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_mostanad_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/mostanad/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async change_mostanad_special_state(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/mostanad/special", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_list_of_mostanad(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/mostanad/del-group", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_mostanad(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/mostanad/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_mostanad_detail(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/mostanad/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async edit_mostanad_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("id" , data.id)
        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        formData.append("date" , data.date)
        formData.append("author_id" , data.author_id)
        if(data.image != '') {
          formData.append("image" , data.image)
        }
        if(data.video != '') {
          formData.append("video" , data.video)
        }
        formData.append("content" , data.content)
        formData.append("summary_description" , data.summary_description)
        if(data.seo_image != '') {
          formData.append("seo_image" , data.seo_image)
        }
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)


        const result = await HTTP.post("/admin/mostanad/edit", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      // pages
      async save_page_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        formData.append("image" , data.image)
        formData.append("content" , data.content)
        formData.append("seo_image" , data.seo_image)
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)


        const result = await HTTP.post("/admin/pages/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_page_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/pages/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_list_of_pages(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/pages/del-group", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_page(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/pages/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_page_detail(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/pages/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async edit_page_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("id" , data.id)
        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        if(data.image != '') {
          formData.append("image" , data.image)
        }
        formData.append("content" , data.content)
        if(data.seo_image != '') {
          formData.append("seo_image" , data.seo_image)
        }
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)


        const result = await HTTP.post("/admin/pages/edit", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      // users
      async save_user_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()


        formData.append("profile" , data.profile)
        formData.append("name" , data.name)
        formData.append("family" , data.family)
        formData.append("username" , data.username)
        formData.append("email" , data.email)
        formData.append("password" , data.password)
        formData.append("role" , data.role)


        const result = await HTTP.post("/admin/users/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_users_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/users/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_user(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/users/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_list_of_users(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/users/del-group", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async change_user_account_status(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/users/chac-status", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_user_detail(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/users/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async edit_user_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()


        formData.append("id" , data.id)
        if(data.profile != ''){
          formData.append("profile" , data.profile)
        }
        formData.append("name" , data.name)
        formData.append("family" , data.family)
        formData.append("username" , data.username)
        formData.append("email" , data.email)
        if(data.password != ''){
          formData.append("password" , data.password)
        }
        formData.append("role" , data.role)


        const result = await HTTP.post("/admin/users/edit", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      // supporters
      async get_favorite_animals_category(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/supporters/fav-anims-cat" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_activity_animals_category(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/supporters/act-anims-cat" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },
      
      async add_new_supporter(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()


        formData.append("fullName" , data.fullName)
        formData.append("slug" , data.slug)
        formData.append("mobile" , data.mobile)
        formData.append("faveorite_animal" , data.faveorite_animal.ids)
        formData.append("activity" , data.activity.ids)
        formData.append("biography" , data.biography)

        if(data.socials.length != 0){
          for(let i=0; i < data.socials.length; i++){
            formData.append("socials["+i+"]" , JSON.stringify(data.socials[i]))
          }
        }else {
          formData.append("socials" , "")
        }

        formData.append("profile_image" , data.profile_image)


        const result = await HTTP.post("/admin/supporters/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async add_new_supporter(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()


        formData.append("fullName" , data.fullName)
        formData.append("slug" , data.slug)
        formData.append("mobile" , data.mobile)
        formData.append("faveorite_animal" , data.faveorite_animal.ids)
        formData.append("activity" , data.activity.ids)
        formData.append("biography" , data.biography)

        if(data.socials.length != 0){
          for(let i=0; i < data.socials.length; i++){
            formData.append("socials["+i+"]" , JSON.stringify(data.socials[i]))
          }
        }else {
          formData.append("socials" , "")
        }

        formData.append("profile_image" , data.profile_image)


        const result = await HTTP.post("/admin/supporters/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async get_supporters_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/supporters/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_list_of_supporters(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/supporters/del-group", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_supporter(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/supporters/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async change_supporter_account_status(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/supporters/chac-status", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_supporter_detail(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/supporters/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async edit_supporter(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("id" , data.id)
        formData.append("fullName" , data.fullName)
        formData.append("slug" , data.slug)
        formData.append("mobile" , data.mobile)
        formData.append("faveorite_animal" , data.faveorite_animal.ids)
        formData.append("activity" , data.activity.ids)
        formData.append("biography" , data.biography)

        if(data.socials.length != 0){
          for(let i=0; i < data.socials.length; i++){
            formData.append("socials["+i+"]" , JSON.stringify(data.socials[i]))
          }
        }else {
          formData.append("socials" , "")
        }

        if(data.profile_image != ''){
          formData.append("profile_image" , data.profile_image)
        }


        const result = await HTTP.post("/admin/supporters/edit", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async add_fav_cat(context , data) {
        const token = cookies.get("_token")

        const result = await HTTP.post("/admin/supporters/add-fav-anims", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async add_act_cat(context , data) {
        const token = cookies.get("_token")

        const result = await HTTP.post("/admin/supporters/add-act-anims", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async delete_supporters_cat(context , data){
        const token = cookies.get("_token")

        const result = await HTTP.post("/admin/supporters/delete-supprter-cats", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      // appointments
      async add_new_appointment(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()


        formData.append("title" , data.title)
        formData.append("end_date" , data.end_date)
        formData.append("appointment_time" , data.appointment_time)
        formData.append("location" , data.location)
        formData.append("description" , data.description)
        formData.append("summary_description" , data.summary_description)
        formData.append("is_main" , data.is_main)
        formData.append("slug" , data.slug)
        formData.append("status" , data.status)
        formData.append("image" , data.image)

        const result = await HTTP.post("/admin/appointments/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async get_appointment_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/appointments/get" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async appoint_is_main_status(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/appointments/change-main-status", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async change_appointment_status(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/appointments/change-status", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_appointment(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/appointments/delete", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async delete_list_of_appointments(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/appointments/del-group", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async get_appointment_detail(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/appointments/get-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          },
          params: data
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                  "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async edit_appointment(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("id" , data.id)
        formData.append("title" , data.title)
        formData.append("end_date" , data.end_date)
        formData.append("appointment_time" , data.appointment_time)
        formData.append("location" , data.location)
        formData.append("description" , data.description)
        formData.append("summary_description" , data.summary_description)
        formData.append("is_main" , data.is_main)
        formData.append("slug" , data.slug)

        if(data.image != ""){
          formData.append("image" , data.image)
        }

        const result = await HTTP.post("/admin/appointments/edit", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }
      },

      async get_theme_config(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/settheme/get-theme-detail" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      },

      async save_theme_config(context , data){
        const token = cookies.get("_token")
        const formData = new FormData()
        if(data.sliders.length != 0){
          let j = 0;
          for (let i = 0; i < data.sliders.length; i++) {
            if(data.sliders[i].file != '') {
              formData.append("slider["+j+"][sliderImg]" , data.sliders[i].file);
              formData.append("slider["+j+"][sliderId]"  , data.sliders[i].sliderId);
              j = j + 1
            }
          }
        }

        if(data.linkduni.length != 0) {
          for(let i=0; i < data.linkduni.length; i++){
            formData.append("linkduni["+i+"]" , JSON.stringify(data.linkduni[i]))
          }
        }

        formData.append("aboutus" , data.aboutus)

        if(data.siteLogo != ''){
          formData.append("siteLogo" , data.siteLogo)
        }

        formData.append("mobile" , data.mobile)
        formData.append("telphone" , data.telphone)
        formData.append("email" , data.email)
        formData.append("cardnumber" , data.cardnumber)
        formData.append("address" , data.address)
        formData.append("instagram" , data.instagram)
        
        
        const result = await HTTP.post("/admin/settheme/save", formData ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else{
              return {
                "message": "failed"
              }
            }
        }else{
          return {
              "message": "failed"
          }
        }        
        
      },

      async logout_supporter(context){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/auth/logout" ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                cookies.remove("_token" , {path: '/'})
                return result.data
            }else{
                return {
                    "message": "failed"
                }
            }
        }else{
            return {
                "message": "failed"
            }
        }
      }
    },

    // getters
    getters:{
        get_authadmin(state){
            return state.authadmin
        },
    }
})

export default store;