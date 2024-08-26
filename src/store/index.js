import { createStore } from 'vuex'
import HTTP from '@/axios/index.js'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const store = createStore({
    state () {
      return {
        authadmin: null,
        notifications: []
      }
    },

    // mutations
    mutations: {
        set_admin_token(state, user) {
            state.authadmin = user;
        },
        add_notification(state , data) {
          state.notifications = [data , ...state.notifications]
        },
        clear_notifications(state) {
          state.notifications = []
        }
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

      async change_category_header_status(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/categories/set-header", data ,{
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
      async save_post_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("title" , data.title)
        formData.append("type" , data.postType)
        formData.append("slug" , data.slug)
        formData.append("date" , data.date)
        formData.append("author_id" , data.author_id)
        formData.append("category_id" , data.category_id)
        formData.append("image" , data.image)
        formData.append("content" , data.content)
        formData.append("seo_image" , data.seo_image)
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)

        if(data.galleries.length != 0) {
          for(let i = 0 ; i < data.galleries.length ; i++){
            formData.append("images["+i+"]", data.galleries[i])
          }
        }

        if(data.videoFile != null) {
          formData.append("video", data.videoFile)
        }


        const result = await HTTP.post("/admin/admin-posts/save", formData , {
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
        const result = await HTTP.get("/admin/admin-posts/get" ,{
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
        const result = await HTTP.post("/admin/admin-posts/special", data ,{
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
        const result = await HTTP.post("/admin/admin-posts/del-group", data ,{
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
        const result = await HTTP.post("/admin/admin-posts/delete", data ,{
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
        const result = await HTTP.get("/admin/admin-posts/get-detail" ,{
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

      async edit_post_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()

        formData.append("id" , data.id)
        formData.append("title" , data.title)
        formData.append("slug" , data.slug)
        formData.append("date" , data.date)
        formData.append("author_id" , data.author_id)
        formData.append("content" , data.content)
        formData.append("meta_title" , data.meta_title)
        formData.append("meta_description" , data.meta_description)
        formData.append("keywords" , data.keywords)
        formData.append("type" , data.postType)
        formData.append("category_id" , data.category_id)

        if(data.image != '') {
          formData.append("image" , data.image)
        }


        if(data.seo_image != '') {
          formData.append("seo_image" , data.seo_image)
        }

        if(data.galleries.length != 0) {
          for(let i = 0 ; i < data.galleries.length ; i++){
            formData.append("images["+i+"]", data.galleries[i])
          }
        }

        if(data.videoFile != null) {
          formData.append("video", data.videoFile)
        }


        const result = await HTTP.post("/admin/admin-posts/edit", formData ,{
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

      async remove_gallery_image(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/admin-posts/delete-gallery", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else {
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

      async remove_video(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/admin-posts/delete-video", data ,{
          headers: {
            "Authorization": "Bearer "+ token
          }
        })

        if(result.status == 200){
            if(result.data){
                return result.data
            }else {
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
      async save_admin_data(context , data){
        const token = cookies.get("_token")
        let formData = new FormData()


        formData.append("profile" , data.profile)
        formData.append("name" , data.name)
        formData.append("family" , data.family)
        formData.append("username" , data.username)
        formData.append("email" , data.email)
        formData.append("password" , data.password)
        formData.append("role" , data.role)


        const result = await HTTP.post("/admin/admins/save", formData ,{
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

      async get_admins_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/admins/get" ,{
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

      async delete_admin(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/admins/delete", data ,{
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

      async delete_list_of_admins(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/admins/del-group", data ,{
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

      async change_admin_account_status(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/admins/chac-status", data ,{
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

      async get_admin_detail(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/admins/get-detail" ,{
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

      async edit_admin_data(context , data){
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


        const result = await HTTP.post("/admin/admins/edit", formData ,{
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

      // users api
      async get_users_list(context){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/users/users-list" , {
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

      async get_user(context , data){
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/users/user" , {
          params: {id: data.id},
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

      async create_user_account(context , data){
        const token = cookies.get("_token")
          const result = await HTTP.post("/admin/users/create" , data , {
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

      async edit_user_account(context , data){
        const token = cookies.get("_token")
          const result = await HTTP.post("/admin/users/edit" , data , {
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

      async remove_user(context , data){
        const token = cookies.get("_token")
          const result = await HTTP.post("/admin/users/remove" , data , {
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

      async do_block_user_account(context , data){
        const token = cookies.get("_token")
          const result = await HTTP.post("/admin/users/block" , data ,{
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
      
      async change_user_password(context , data){
        const token = cookies.get("_token")
          const result = await HTTP.post("/admin/users/change-pass" , data ,{
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

      // theme api
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

      // template api 
      async get_tags_list(context) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/template/get-tags" ,{
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

      async save_template(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.post("/admin/template/save" , {data: JSON.stringify(data)} ,{
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

      async get_default_template(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/template/get-templates" ,{
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

      async getDefaultNotifications(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/notifications/get-notifications" ,{
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

      async get_user_post(context , data) {
        const token = cookies.get("_token")
        const result = await HTTP.get("/admin/notifications/get-post" ,{
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
      }
    },

    // getters
    getters:{
      get_authadmin(state){
          return state.authadmin
      },
      get_notifications(state) {
        return state.notifications
      }
    }
})

export default store;