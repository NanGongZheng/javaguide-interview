// ===== JavaGuide Interview - Main JS =====

// Search Index
const searchIndex = [
  { title: 'Java 集合框架', desc: 'HashMap、ArrayList、ConcurrentHashMap 源码分析', url: 'pages/java-core.html#collections', keywords: 'hashmap arraylist linkedlist treemap collections map set list' },
  { title: 'Java 并发编程', desc: '线程池、锁机制、CAS、AQS 原理详解', url: 'pages/java-core.html#concurrency', keywords: 'thread pool lock synchronized reentrantlock cas aqs volatile' },
  { title: 'JVM 虚拟机', desc: '内存模型、垃圾回收、类加载机制', url: 'pages/java-core.html#jvm', keywords: 'jvm gc classloader memory heap stack metaspace' },
  { title: 'Java 新特性', desc: 'Java 8-21 Stream、Lambda、Record、Sealed Class', url: 'pages/java-core.html#new-features', keywords: 'stream lambda record sealed var pattern matching' },
  { title: 'Spring Boot', desc: '自动配置原理、Starter 机制、常用注解', url: 'pages/spring.html#spring-boot', keywords: 'springboot autoconfiguration starter annotation bean' },
  { title: 'Spring MVC', desc: '请求处理流程、拦截器、异常处理', url: 'pages/spring.html#spring-mvc', keywords: 'dispatcher servlet handler interceptor controller rest' },
  { title: 'Spring Cloud', desc: '微服务架构、注册发现、网关、熔断', url: 'pages/spring.html#spring-cloud', keywords: 'nacos gateway sentinel feign ribbon loadbalancer' },
  { title: 'Spring 事务', desc: '事务传播、隔离级别、事务失效场景', url: 'pages/spring.html#transaction', keywords: 'transaction propagation isolation rollback' },
  { title: 'MySQL 索引', desc: 'B+ 树原理、索引优化、慢查询分析', url: 'pages/database.html#mysql-index', keywords: 'mysql index b+ tree explain slow query optimize' },
  { title: 'MySQL 事务', desc: 'ACID、MVCC、锁机制、死锁处理', url: 'pages/database.html#mysql-transaction', keywords: 'mvcc acid innodb lock deadlock isolation' },
  { title: 'Redis 数据结构', desc: '五种基础类型、底层编码、使用场景', url: 'pages/database.html#redis', keywords: 'redis string list set hash zset skiplist' },
  { title: 'Redis 高可用', desc: '主从、哨兵、集群、持久化', url: 'pages/database.html#redis-ha', keywords: 'redis cluster sentinel replication rdb aof persistence' },
  { title: '分布式锁', desc: 'Redis/ZooKeeper/数据库实现方案对比', url: 'pages/distribution.html#distributed-lock', keywords: 'distributed lock redis zookeeper redlock' },
  { title: '消息队列', desc: 'RabbitMQ、Kafka、RocketMQ 选型与实战', url: 'pages/distribution.html#mq', keywords: 'mq rabbitmq kafka rocketmq message queue consumer producer' },
  { title: '系统设计', desc: '秒杀系统、短链接、消息推送等经典设计', url: 'pages/distribution.html#system-design', keywords: 'system design seckill url shortener high concurrency' },
  { title: '设计模式', desc: '单例、工厂、策略、模板方法等常用模式', url: 'pages/distribution.html#design-patterns', keywords: 'design pattern singleton factory strategy template observer' },
  { title: '面试题精选', desc: '高频 Java 后端面试题与详细解答', url: 'pages/interview.html', keywords: 'interview question answer 面试题' },
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initSearch();
  initQA();
  highlightActiveNav();
});

// ===== Theme =====
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
    // Set initial icon
    const current = document.documentElement.getAttribute('data-theme');
    toggle.textContent = current === 'dark' ? '☀️' : '🌙';
  }
}

// ===== Sidebar =====
function initSidebar() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay?.classList.toggle('active');
    });

    overlay?.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
}

// ===== Search =====
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 1) {
      results.classList.remove('active');
      return;
    }

    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.keywords.includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-secondary);font-size:14px;">没有找到相关内容</div>';
    } else {
      results.innerHTML = matches.map(item =>
        `<a href="${getBasePath()}${item.url}" class="search-result-item">
          <div class="title">${item.title}</div>
          <div class="desc">${item.desc}</div>
        </a>`
      ).join('');
    }
    results.classList.add('active');
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      results.classList.remove('active');
    }
  });

  // Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape') {
      results.classList.remove('active');
      input.blur();
    }
  });
}

function getBasePath() {
  const path = window.location.pathname;
  // Check if we're in a pages/ subdirectory
  if (path.includes('/pages/')) {
    return '../';
  }
  return '';
}

// ===== Q&A Accordion =====
function initQA() {
  document.querySelectorAll('.qa-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.qa-item');
      const wasOpen = item.classList.contains('open');
      // Close all others
      document.querySelectorAll('.qa-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ===== Active Nav =====
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// ===== Smooth scroll for TOC =====
document.addEventListener('click', (e) => {
  const tocLink = e.target.closest('.toc-list a');
  if (tocLink) {
    e.preventDefault();
    const target = document.querySelector(tocLink.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
