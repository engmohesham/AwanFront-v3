<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          من نحن
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          منصة تعليمية رائدة تهدف إلى تقديم أفضل الكورسات والدورات التدريبية
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            رؤيتنا
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            نسعى لأن نكون المنصة التعليمية الأولى في الوطن العربي، ونقدم محتوى تعليمي عالي الجودة يساعد الطلاب على تحقيق أهدافهم.
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            نؤمن بأن التعليم هو المفتاح للنجاح والتطور، ولذلك نعمل على توفير أفضل المدربين وأحدث التقنيات التعليمية.
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-3xl p-8 text-white text-center">
          <h3 class="text-2xl font-bold mb-4">إحصائيات سريعة</h3>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="text-3xl font-bold">1000+</div>
              <div class="text-sm">كورس متاح</div>
            </div>
            <div>
              <div class="text-3xl font-bold">50+</div>
              <div class="text-sm">مدرب محترف</div>
            </div>
            <div>
              <div class="text-3xl font-bold">10K+</div>
              <div class="text-sm">طالب نشط</div>
            </div>
            <div>
              <div class="text-3xl font-bold">95%</div>
              <div class="text-sm">معدل الرضا</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'من نحن'
})
</script>
