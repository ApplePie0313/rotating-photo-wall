const basePhotos = [
  {
    id: "photo-001",
    src: "./photos/photo-001.jpg",
    title: "午后微光",
    date: "高中",
    location: "清华园",
    note: "阳光落在路边，像给这一天偷偷加了一层滤镜。",
    size: "large",
    seed: 0.13
  },
  {
    id: "photo-002",
    src: "./photos/photo-002.jpg",
    title: "并肩的夏天",
    date: "大一暑假",
    location: "草坪旁",
    note: "没有特别安排，只是刚好都笑得很松弛。",
    size: "medium",
    seed: 0.32
  },
  {
    id: "photo-003",
    src: "./photos/photo-003.jpg",
    title: "风经过的时候",
    date: "春天",
    location: "教学楼前",
    note: "风很轻，照片里的时间也很轻。",
    size: "small",
    seed: 0.51
  },
  {
    id: "photo-004",
    src: "./photos/photo-004.jpg",
    title: "傍晚合影",
    date: "毕业季前",
    location: "校门附近",
    note: "那天的天空颜色很好看，适合把心情留下来。",
    size: "large",
    seed: 0.68
  },
  {
    id: "photo-005",
    src: "./photos/photo-005.jpg",
    title: "晚霞之后",
    date: "某个夏天",
    location: "湖边",
    note: "走着走着就慢下来，好像谁都不急着结束这一天。",
    size: "medium",
    seed: 0.84
  },
  {
    id: "photo-006",
    src: "./photos/photo-006.jpg",
    title: "闪光一刻",
    date: "后来",
    location: "林荫道",
    note: "很普通的一秒，被拍下来以后就变得不普通了。",
    size: "small",
    seed: 0.96
  },
  {
    id: "photo-007",
    src: "./photos/0a9da664f6f71d13a48b4b8d9bdca833.jpg",
    title: "新增照片 01",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "small",
    seed: 0.07
  },
  {
    id: "photo-008",
    src: "./photos/0e794498fddd7108e67e2870e3aaa466.jpg",
    title: "新增照片 02",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "medium",
    seed: 0.18
  },
  {
    id: "photo-009",
    src: "./photos/123217441d384fb10f4fb66bec30a547.jpg",
    title: "新增照片 03",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "large",
    seed: 0.27
  },
  {
    id: "photo-010",
    src: "./photos/1d634e0862ac7a8d90beae9ea4700269.jpg",
    title: "新增照片 04",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "medium",
    seed: 0.36
  },
  {
    id: "photo-011",
    src: "./photos/1e128854f6cdae012dcf22e3b1ed579f.jpg",
    title: "新增照片 05",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "small",
    seed: 0.44
  },
  {
    id: "photo-012",
    src: "./photos/2aa8538154100de64596697a03e323f6.jpg",
    title: "新增照片 06",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "large",
    seed: 0.53
  },
  {
    id: "photo-013",
    src: "./photos/3f5e6bd4c0763b7c6f9ed5be3ffcdda1.jpg",
    title: "新增照片 07",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "medium",
    seed: 0.61
  },
  {
    id: "photo-014",
    src: "./photos/6c8d85201c08dd83941e33a935ab7f28.jpg",
    title: "新增照片 08",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "small",
    seed: 0.69
  },
  {
    id: "photo-015",
    src: "./photos/85c1ca7eaa870a400251ed264475a3a1.jpg",
    title: "新增照片 09",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "large",
    seed: 0.76
  },
  {
    id: "photo-016",
    src: "./photos/d3ef35dbb2f4be8fde13df8f063de4ed.jpg",
    title: "新增照片 10",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "medium",
    seed: 0.82
  },
  {
    id: "photo-017",
    src: "./photos/de0de5147662c533cdcfc77f5f6111a8.jpg",
    title: "新增照片 11",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "small",
    seed: 0.88
  },
  {
    id: "photo-018",
    src: "./photos/deb454b1959356ecee73d0b68b323a8e.jpg",
    title: "新增照片 12",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "large",
    seed: 0.93
  },
  {
    id: "photo-019",
    src: "./photos/efb2921262753afcb471ea62f7fcf30a.jpg",
    title: "新增照片 13",
    date: "待补充",
    location: "待补充",
    note: "这张照片的信息之后可以继续补充。",
    size: "medium",
    seed: 0.98
  }
];

const sizeMap = {
  small: [150, 108],
  medium: [190, 132],
  large: [235, 162]
};

const photos = basePhotos;
const cylinder = document.querySelector("#photoCylinder");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const addPhotoButton = document.querySelector("#addPhotoButton");
const qixiWelcome = document.querySelector("#qixiWelcome");
const qixiCloseButton = document.querySelector("#qixiCloseButton");
const detailDialog = document.querySelector("#detailDialog");
const detailImage = document.querySelector("#detailImage");
const detailDate = document.querySelector("#detailDate");
const detailTitle = document.querySelector("#detailTitle");
const detailLocation = document.querySelector("#detailLocation");
const detailNote = document.querySelector("#detailNote");
const editPhotoButton = document.querySelector("#editPhotoButton");
const deletePhotoButton = document.querySelector("#deletePhotoButton");

let activePhotoId = null;

function renderPhotos() {
  cylinder.innerHTML = "";
  const query = searchInput.value.trim().toLowerCase();
  const radius = window.matchMedia("(max-width: 720px)").matches ? 280 : 430;
  const matchingPhotos = query ? photos.filter((photo) => searchableText(photo).includes(query)) : [];
  let matchCursor = 0;
  let dimmedCursor = 0;
  let matches = 0;

  photos.forEach((photo, index) => {
    const isMatch = !query || searchableText(photo).includes(query);
    if (isMatch) matches += 1;

    const card = document.createElement("button");
    const [width, height] = sizeMap[photo.size] || sizeMap.medium;
    let angle = (360 / Math.max(photos.length, 1)) * index + (photo.seed * 24 - 12);
    if (query && isMatch) {
      const spread = Math.min(34, Math.max(16, 120 / Math.max(matchingPhotos.length, 1)));
      angle = (matchCursor - (matchingPhotos.length - 1) / 2) * spread;
      matchCursor += 1;
    } else if (query) {
      const dimmedTotal = Math.max(photos.length - matchingPhotos.length, 1);
      angle = 118 + (220 / dimmedTotal) * dimmedCursor + photo.seed * 10;
      dimmedCursor += 1;
    }

    card.type = "button";
    card.className = "photo-card";
    card.dataset.id = photo.id;
    card.dataset.title = photo.title;
    card.style.setProperty("--w", `${width}px`);
    card.style.setProperty("--h", `${height}px`);
    card.style.setProperty("--angle", `${angle}deg`);
    card.style.setProperty("--radius", `${radius}px`);
    card.style.setProperty("--y", `${Math.sin(photo.seed * Math.PI * 4) * 118}px`);
    card.style.setProperty("--tilt", `${photo.seed * 18 - 9}deg`);

    if (query && isMatch) card.classList.add("is-match");
    if (query && !isMatch) card.classList.add("is-dimmed");

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.title;
    card.appendChild(image);

    card.addEventListener("pointerenter", () => {
      cylinder.classList.add("is-paused");
      card.classList.add("is-focused");
    });
    card.addEventListener("pointerleave", () => {
      cylinder.classList.remove("is-paused");
      card.classList.remove("is-focused");
    });
    card.addEventListener("click", () => openDetail(photo.id));
    cylinder.appendChild(card);
  });

  emptyState.hidden = !query || matches > 0;
}

function searchableText(photo) {
  return [photo.title, photo.date, photo.location, photo.note].filter(Boolean).join(" ").toLowerCase();
}

function openDetail(photoId) {
  const photo = photos.find((item) => item.id === photoId);
  if (!photo) return;

  activePhotoId = photoId;
  detailImage.src = photo.src;
  detailImage.alt = photo.title;
  detailDate.textContent = photo.date || "未填写日期";
  detailTitle.textContent = photo.title;
  detailLocation.textContent = photo.location || "未填写地点";
  detailNote.textContent = photo.note || "还没有备注";
  detailDialog.showModal();
}

function setupBackground() {
  const canvas = document.querySelector("#acidBackground");
  const ctx = canvas.getContext("2d");
  const pointer = { x: 0.5, y: 0.5, active: 0 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(time) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(5, 2, 12, 0.32)";
    ctx.fillRect(0, 0, width, height);

    const gap = 48;
    const wave = time * 0.00045;
    for (let y = -gap; y < height + gap; y += gap) {
      for (let x = -gap; x < width + gap; x += gap) {
        const dx = x / width - pointer.x;
        const dy = y / height - pointer.y;
        const cursorPull = Math.max(0, 1 - Math.hypot(dx, dy) * 2.8) * pointer.active;
        const pulse = Math.sin(wave + x * 0.018 + y * 0.014) * 0.5 + 0.5;
        const alpha = 0.035 + pulse * 0.06 + cursorPull * 0.18;
        const size = 13 + pulse * 18 + cursorPull * 22;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((pulse - 0.5) * 0.7);
        ctx.strokeStyle = `rgba(178, 115, 255, ${alpha})`;
        ctx.fillStyle = `rgba(255, 103, 216, ${alpha * 0.22})`;
        ctx.lineWidth = 1;
        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.strokeRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      }
    }

    pointer.active += (0 - pointer.active) * 0.015;
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
    renderPhotos();
  });
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
    pointer.active = 1;
  });

  resize();
  requestAnimationFrame(draw);
}

addPhotoButton.hidden = true;
editPhotoButton.hidden = true;
deletePhotoButton.hidden = true;
qixiCloseButton.addEventListener("click", () => {
  qixiWelcome.classList.add("is-hidden");
});
searchInput.addEventListener("input", renderPhotos);
setupBackground();
renderPhotos();
