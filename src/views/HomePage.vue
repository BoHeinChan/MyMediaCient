<template>
  <div>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
      <div class="container">
        <div class="text-center">
          <router-link to="/" class="btn btn-primary mb-4 mr-4">Home</router-link>
          <router-link to="/login" v-if="!status" class="btn btn-dark mb-4 me-4"
            >Login</router-link
          >
          <button v-if="status" class="btn btn-dark mb-4 me-4" @click="logout()">
            Logout
          </button>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="row d-flex justify-content-between">
              <div class="col-lg-3 col-md-3">
                <div class="col-xl-2 col-lg-2 col-md-4 d-flex align-items-center">
                  <div class="search-box mx-2">
                    <input
                      type="text"
                      placeholder="Search"
                      v-model="searchKey"
                      @keyup="search"
                    />
                  </div>
                  <i class="fas fa-search special-tag" @keyup="search"></i>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="details.htmlnav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        @click="searchCategory('')"
                        >ALL</a
                      >
                      <div v-for="item in categories" :key="item.id">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="details.htmlnav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          @click="searchCategory(item.id)"
                          >{{ item.title }}</a
                        >
                      </div>
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
          </div>
          <h1 class="bg-danger w-100 text-center p-5 text-white m-5" v-if="!status">
            You don't have permisssion!
          </h1>
          <div class="row">
            <div class="" v-if="status">
              <div class="col-12">
                <!-- Nav Card -->
                <div class="tab-content" id="nav-tabContent">
                  <!-- card one -->
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="whats-news-caption">
                      <div class="row">
                        <div
                          class="col-lg-6 col-md-6"
                          v-for="item in posts"
                          :key="item.id"
                          @click="postDetails(item.id)"
                        >
                          <div class="single-what-news mb-100">
                            <div class="what-img">
                              <img :src="item.image" alt="" />
                            </div>
                            <div class="what-cap">
                              <span class="color1">CODE LAB</span>
                              <h4>
                                <a href="details.html">{{ item.title }}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Nav Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <div class="pagination-area pb-45 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow roted"></span
                    ></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="details.html">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">03</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End pagination  -->
  </div>
</template>

<script src="../JS/HomePage.js"></script>

<style lang="scss" scoped></style>
