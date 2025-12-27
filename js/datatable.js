// Simple Datatable setup for tables with data-table attribute

function buildTable() {
  const table = document.querySelector('[data-table]');
  if (!table || typeof simpleDatatables === 'undefined') return;

  const dataTable = new simpleDatatables.DataTable(table, {
    searchable: true,
    fixedHeight: true,
    perPage: 5,
    labels: {
      placeholder: 'Tìm kiếm...',
      perPage: 'Hiển thị {select} dòng',
      noRows: 'Không có dữ liệu',
      info: 'Tổng {rows} dòng'
    }
  });

  const refreshBtn = document.getElementById('table-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => dataTable.refresh());
  }
}

document.addEventListener('DOMContentLoaded', buildTable);
