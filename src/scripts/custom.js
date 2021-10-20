// window.$ = jQuery;

$(".sidebar-items li").on("click", function () {
  $(".sidebar-items li").removeClass("active");
  $(this).addClass("active");
});

document.querySelectorAll(".datepicker").flatpickr({
  allowInput: true,
  wrap: true,
  dateFormat: "d-m-Y",
  disableMobile: "true"
});

$(".searchable-dropdown").select2({
  width: "100%",
});

/*$("#disclosure_list_table").DataTable({
  dom: '<"tnav">t<"dt_bottom"p>',
  scrollX: true,
  columnDefs: [
    {
      searchable: false,
      orderable: false,
      targets: 0,
    },
  ],
});*/

/*
var t = $("#disclosure_list_table").DataTable({
  // "dom": '<"dt_top"<"dt_toolbar">li><"tnav">t<"dt_bottom"p>',
  dom: '<"tnav">t<"dt_bottom"p>',
  columnDefs: [
    {
      searchable: false,
      orderable: false,
      targets: 0,
    },
  ],
  order: [[1, "asc"]],
  language: {
    lengthMenu: "Records per page _MENU_",
    zeroRecords: "Nothing found - sorry",
    info: "Total Records <strong class='text-bracify'>_PAGES_</strong>",
    infoEmpty: "No records available",
    paginate: {
      next:
        '<img src="/src/images/svg/right-arrow.svg" class="pagination-icon">', // or '→'
      previous:
        '<img src="/src/images/svg/left-arrow.svg" class="pagination-icon">', // or '←'
    },
    // "infoFiltered": "(filtered from _MAX_ total records)"
  },
  pagingType: "simple_numbers",
  columnDefs: [
    { orderable: false, targets: -1 },
    { orderable: false, targets: 0 },
  ],
});

t.on("order.dt search.dt", function () {
  t.column(0, { search: "applied", order: "applied" })
    .nodes()
    .each(function (cell, i) {
      cell.innerHTML = i + 1;
    });
}).draw();
*/
