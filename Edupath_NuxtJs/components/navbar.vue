<template>
    <nav id="topnav" class="defaultscroll is-sticky" :class="tagline ? 'tagline-height' : ''">
        <div class="container relative">

            <NuxtLink v-if="navlight" class="logo" to="/">
                <span class="inline-block dark:hidden">
                    <img :src="logoDark" class="l-dark" height="24" alt=""/>
                    <img :src="logoLight" class="l-light" height="24" alt=""/>
                </span>
                <img :src="logoLight" height="24" class="hidden dark:inline-block" alt=""/>
            </NuxtLink>

            <NuxtLink v-if="!navlight"  class="logo" to="/">
                <img :src="logoDark" class="inline-block dark:hidden" alt=""/>
                <img :src="logoLight" class="hidden dark:inline-block" alt=""/>
            </NuxtLink>

            <div class="menu-extras">
                <div class="menu-item">
                    <NuxtLink :to="[]" class="navbar-toggle" :class="toggle ? 'open' : ''" id="isToggle" @click="toggleMenu">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!--Login button Start-->
            <ul class="buy-button list-none mb-0">
                <li class="inline-block relative">
                    <button v-if="navlight" class="text-[20px]" @click="searchMenu = !searchMenu" type="button">
                        <i class="iconoir-search align-middle login-btn-primary"></i>
                        <i class="iconoir-search text-white align-middle login-btn-light"></i>
                    </button>          
                    <button v-if="!navlight" class="text-[20px]" @click="searchMenu = !searchMenu" type="button">
                        <i class="iconoir-search align-middle"></i>
                    </button>      

                    <div class="fixed w-full h-[100vh] top-0 left-0 flex justify-center" style="background-color: rgba(0, 0, 0, 0.5);" :class="searchMenu ? '' : 'hidden'">
                        <div id="" class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white w-11/12 max-w-5xl mt-20 fixed">
                            <div class="relative w-full h-auto">
                                <form method="dialog" class="modal-backdrop">
                                    <button class="size-5 rounded-md flex justify-center items-center absolute top-0 end-0 btn-ghost" @click="searchMenu = !searchMenu"><i data-feather="x" class="size-4"></i></button>
                                </form>
                                <div class="p-6 text-center">
                                    <form class="relative">
                                        <i class="iconoir-search text-lg absolute top-2.5 end-0"></i>
                                        <input type="text" class="w-full py-2 px-3 bg-transparent focus:outline-none rounded-md pe-6 h-10" name="s" id="searchItem" placeholder="Search...">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </li>

                <li class="dropdown inline-block relative mx-1">
                    <button class="dropdown-toggle size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-violet-600 border border-violet-600 text-white" type="button" @click="cart = !cart">
                        <i data-feather="shopping-cart" class="size-4"></i>
                    </button>
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" :class="cart ? '' : 'hidden'">
                        <ul class="py-3 text-start" aria-labelledby="dropdownDefault">
                            <li class="px-3">Your shopping cart is empty.</li>
                        </ul>
                    </div>


                </li>

                <li class="dropdown inline-block relative">
                    <button @click="userAccount = !userAccount" class="dropdown-toggle items-center" type="button">
                        <span class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-violet-600 border border-violet-600 text-white"><img :src="user" class="rounded-full size-[30px]" alt=""/></span>
                    </button>
                 
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" :class="userAccount ? '' : 'hidden'">
                        <ul class="py-2 text-start">
                            <li>
                                <NuxtLink :to="[]" class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-violet-600 dark:hover:text-white"><i data-feather="user" class="size-4 me-2"></i>Profile</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="[]" class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-violet-600 dark:hover:text-white"><i data-feather="settings" class="size-4 me-2"></i>Settings</NuxtLink>
                            </li>
                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                                <NuxtLink :to="[]" class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-violet-600 dark:hover:text-white"><i data-feather="lock" class="size-4 me-2"></i>Lockscreen</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="[]" class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-violet-600 dark:hover:text-white"><i data-feather="log-out" class="size-4 me-2"></i>Logout</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div id="navigation" :class="toggle ? 'block' : 'none'">
                <ul class="navigation-menu justify-start" :class="navlight ? 'nav-light' : ''">
                    <li class="has-submenu parent-parent-menu-item" :class="['/', '/index-two', '/index-three', '/index-four', '/index-five'].includes(current) ? 'active' : ''">
                        <NuxtLink :to="[]" @click="submenu(openMenu === '/home-item' ? '' : '/home-item')">Home</NuxtLink><span class="menu-arrow"></span>

                        <ul class="submenu megamenu" :class="['/home-item'].includes(openMenu) ? 'open' : ''">
                            <li>
                                <ul>
                                    <li :class="current === '/' ? 'active' : ''">
                                        <NuxtLink to="/" class="sub-menu-item">
                                            <div class="min-[992px]:text-center">
                                                <span class="hidden min-[992px]:block"><img :src="demo1" class="img-fluid rounded shadow-md" alt=""/></span>
                                                <span class="min-[992px]:mt-2 block">Hero One</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li :class="current === '/index-two' ? 'active' : ''">
                                        <NuxtLink to="/index-two" class="sub-menu-item">
                                            <div class="min-[992px]:text-center">
                                                <span class="hidden min-[992px]:block"><img :src="demo2" class="img-fluid rounded shadow-md" alt=""/></span>
                                                <span class="min-[992px]:mt-2 block">Hero Two</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li :class="current === '/index-three' ? 'active' : ''">
                                        <NuxtLink to="/index-three" class="sub-menu-item">
                                            <div class="min-[992px]:text-center">
                                                <span class="hidden min-[992px]:block"><img :src="demo3" class="img-fluid rounded shadow-md" alt=""/></span>
                                                <span class="min-[992px]:mt-2 block">Hero Three</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li :class="current === '/index-four' ? 'active' : ''">
                                        <NuxtLink to="/index-four" class="sub-menu-item">
                                            <div class="min-[992px]:text-center">
                                                <span class="hidden min-[992px]:block"><img :src="demo4" class="img-fluid rounded shadow-md" alt=""/></span>
                                                <span class="min-[992px]:mt-2 block">Hero Four</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
            
                            <li>
                                <ul>
                                    <li :class="current === '/index-five' ? 'active' : ''">
                                        <NuxtLink to="/index-five" class="sub-menu-item">
                                            <div class="min-[992px]:text-center">
                                                <span class="hidden min-[992px]:block"><img :src="demo5" class="img-fluid rounded shadow-md" alt=""/></span>
                                                <span class="min-[992px]:mt-2 block">Hero Five</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="has-submenu parent-parent-menu-item" :class="['/grid','/grid-sidebar','/list','/list-sidebar','/youtube-listing','/video-listing','/course-detail','/course-detail-two'].includes(current) ? 'active' : ''">
                        <NuxtLink :to="[]" @click="submenu(openMenu === '/courses-item' ? '' : '/courses-item')">Courses</NuxtLink><span class="menu-arrow"></span>
                        <ul class="submenu" :class="['/courses-item','/grid-item','/list-item','/video-item','/detail-item'].includes(openMenu) ? 'open' : ''">
                            <li class="has-submenu parent-menu-item" :class="['/grid','/grid-sidebar'].includes(current) ? 'active' : ''"><NuxtLink :to="[]" @click="submenu(openMenu === '/grid-item' ? '' : '/grid-item')"> Grid Courses </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/grid-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/grid' ? 'active' : ''"><NuxtLink to="/grid" class="sub-menu-item">Grid Listing</NuxtLink></li>
                                    <li :class="current === '/grid-sidebar' ? 'active' : ''"><NuxtLink to="/grid-sidebar" class="sub-menu-item">Grid Sidebar </NuxtLink></li>
                                </ul> 
                            </li>
                            <li class="has-submenu parent-menu-item" :class="['/list','/list-sidebar'].includes(current) ? 'active' : ''"><NuxtLink :to="[]" @click="submenu(openMenu === '/list-item' ? '' : '/list-item')"> List Courses </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/list-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/list' ? 'active' : ''"><NuxtLink to="/list" class="sub-menu-item">List Listing</NuxtLink></li>
                                    <li :class="current === '/list-sidebar' ? 'active' : ''"><NuxtLink to="/list-sidebar" class="sub-menu-item">List Sidebar </NuxtLink></li>
                                </ul>  
                            </li>
                            <li class="has-submenu parent-menu-item" :class="['/youtube-listing','/video-listing'].includes(current) ? 'active' : ''"><NuxtLink :to="[]" @click="submenu(openMenu === '/video-item' ? '' : '/video-item')"> Video Courses </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/video-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/youtube-listing' ? 'active' : ''"><NuxtLink to="/youtube-listing" class="sub-menu-item">Youtube Listing</NuxtLink></li>
                                    <li :class="current === '/video-listing' ? 'active' : ''"><NuxtLink to="/video-listing" class="sub-menu-item">Video Listing</NuxtLink></li>
                                </ul>  
                            </li>
                            <li class="has-submenu parent-menu-item" :class="['/course-detail','/course-detail-two'].includes(current) ? 'active' : ''"><NuxtLink :to="[]" @click="submenu(openMenu === '/detail-item' ? '' : '/detail-item')"> Courses Detail</NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/detail-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/course-detail' ? 'active' : ''"><NuxtLink to="/course-detail" class="sub-menu-item">Courses Detail</NuxtLink></li>
                                    <li :class="current === '/course-detail-two' ? 'active' : ''"><NuxtLink to="/course-detail-two" class="sub-menu-item">Courses Detail Two</NuxtLink></li>
                                </ul>  
                            </li>
                        </ul>
                    </li>

                    <li :class="current === '/aboutus' ? 'active' : ''"><NuxtLink to="/aboutus" class="sub-menu-item">About Us</NuxtLink></li>

                    <li class="has-submenu parent-parent-menu-item" :class="['/features','/pricing','/instructors','/faqs','/blogs','/blog-sidebar','/blog-detail'].includes(current) ? 'active' : ''">
                        <NuxtLink :to="[]" @click="submenu(openMenu === '/page-item' ? '' : '/page-item')">Pages</NuxtLink><span class="menu-arrow"></span>
                        <ul class="submenu" :class="['/page-item','/auth-item','/blog-item','/special-item'].includes(openMenu) ? 'open' : ''">
                            <li :class="current === '/features' ? 'active' : ''"><NuxtLink to="/features" class="sub-menu-item">Features</NuxtLink></li>
                            <li :class="current === '/pricing' ? 'active' : ''"><NuxtLink to="/pricing" class="sub-menu-item">Pricing</NuxtLink></li>
                            <li :class="current === '/instructors' ? 'active' : ''"><NuxtLink to="/instructors" class="sub-menu-item">Instructors</NuxtLink></li>
                            <li :class="current === '/faqs' ? 'active' : ''"><NuxtLink to="/faqs" class="sub-menu-item">Faqs</NuxtLink></li>
                            <li class="has-submenu parent-menu-item"><NuxtLink :to="[]" @click="submenu(openMenu === '/auth-item' ? '' : '/auth-item')"> Auth Pages </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/auth-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/login' ? 'active' : ''"><NuxtLink to="/login" class="sub-menu-item">Login</NuxtLink></li>
                                    <li :class="current === '/signup' ? 'active' : ''"><NuxtLink to="/signup" class="sub-menu-item">Signup</NuxtLink></li>
                                    <li :class="current === '/forgot-password' ? 'active' : ''"><NuxtLink to="/forgot-password" class="sub-menu-item">Reset Password</NuxtLink></li>
                                </ul>  
                            </li>
                            <li class="has-submenu parent-menu-item" :class="['/blogs','/blog-sidebar','/blog-detail'].includes(current) ? 'active' : ''"><NuxtLink :to="[]" @click="submenu(openMenu === '/blog-item' ? '' : '/blog-item')"> Blog </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/blog-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/blogs' ? 'active' : ''"><NuxtLink to="/blogs" class="sub-menu-item"> Blogs</NuxtLink></li>
                                    <li :class="current === '/blog-sidebar' ? 'active' : ''"><NuxtLink to="/blog-sidebar" class="sub-menu-item"> Blog Sidebar</NuxtLink></li>
                                    <li :class="current === '/blog-detail' ? 'active' : ''"><NuxtLink to="/blog-detail" class="sub-menu-item"> Blog Detail</NuxtLink></li>
                                </ul> 
                            </li>
                            <li class="has-submenu parent-menu-item"><NuxtLink :to="[]" @click="submenu(openMenu === '/special-item' ? '' : '/special-item')"> Special </NuxtLink><span class="submenu-arrow"></span>
                                <ul class="submenu" :class="['/special-item'].includes(openMenu) ? 'open' : ''">
                                    <li :class="current === '/comingsoon' ? 'active' : ''"><NuxtLink to="/comingsoon" class="sub-menu-item">Comingsoon</NuxtLink></li>
                                    <li :class="current === '/maintenance' ? 'active' : ''"><NuxtLink to="/maintenance" class="sub-menu-item">Maintenance</NuxtLink></li>
                                    <li :class="current === '/404' ? 'active' : ''"><NuxtLink to="/404" class="sub-menu-item">404! Error</NuxtLink></li>
                                </ul>  
                            </li>
                        </ul>
                    </li>
            
                    <li :class="current === '/contactus' ? 'active' : ''"><NuxtLink to="/contactus" class="sub-menu-item">Contact Us</NuxtLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import feather from 'feather-icons'

    import logoDark from '@/assets/images/logo-dark.png'
    import logoLight from '@/assets/images/logo-light.png'
    import user from '@/assets/images/team/1.jpg'
    import demo1 from '@/assets/images/demos/1.png'
    import demo2 from '@/assets/images/demos/2.png'
    import demo3 from '@/assets/images/demos/3.png'
    import demo4 from '@/assets/images/demos/4.png'
    import demo5 from '@/assets/images/demos/5.png'

    defineProps({
        navlight:Boolean,
        tagline:Boolean
    })

    const router = useRoute();
    const current = ref(router.path);
    const openMenu = ref('')
    const toggle = ref(false);
    const cart = ref(false);
    const userAccount = ref(false)
    const searchMenu = ref(false)

    onMounted(()=>{
        feather.replace();
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0,0)
    })

    onUnmounted(()=>{
        window.removeEventListener('scroll', handleScroll);
    })

    const submenu = (item) => {
        openMenu.value = item
    }

    const toggleMenu = () =>{
        toggle.value = !toggle.value
    }

    const handleScroll = () =>{
        const navbar = document.getElementById("topnav");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
</script>
