import React from 'react';
import Seat from './Seat';
import { useState } from 'react';

const SeatMap = ({ seats, onSeatSelected }) => {
  // Tạo mảng chứa các hàng
  const rows = [];
  for (let i = 1; i <= 22; i++) {
    rows.push(i);
  }

  // Tạo mảng chứa các ghế của mỗi hàng
  const columns = ['A', 'B', 'C', 'D', 'E', 'F'];


  const [selectedSeat, setSelectedSeat] = useState({});

  const handleSeatSelect = (row, column, deselected) => {
    if (!deselected) {
        // Gọi hàm callback để truyền thông tin về ghế được chọn lên component cha
        onSeatSelected(row, column);
      }
    // danh sách ghế được chọn trước đó
    const { row: preRow, column: preCol } = selectedSeat;

    if (!deselected && (preRow !== row || preCol !== column)) {
      // Hủy chọn ghế được chọn trước đó
      setSelectedSeat({});

      // Đánh dấu ghế mới được chọn là đã chọn
      setSelectedSeat({ row, column });

    } else if (deselected || (preRow === row && preCol === column)) {
      // Hủy chọn
      setSelectedSeat({});
    }
  };


  // Render sơ đồ ghế máy bay
  return (
    <div style={{
        background:"#FFF",
        padding: '20px',
    }}>
    {/* hiển thị tên cột */}
        <div style={{ display: 'flex' }}>
            <div style={{ width: 80 }}></div>
            {columns.map((column, index) => (
                <div key={index} style={{ width: 80, textAlign: 'center', fontSize:"2rem", fontWeight:"700" }}>{column}</div>
            ))}
        </div>

      {rows.map((row, index) => (
        <div key={index} style={{ display: 'flex' }}>
        {/* hiển thị tên hàng */}
            <div style={{ width: 80, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem", fontWeight:"700"  }}>{row}</div>
          {columns.map((column, index) => {
            // Lấy thông tin trạng thái của ghế
            const seat = seats.find(s => s.row === row && s.column === column);
            const isSelected = selectedSeat.row === row && selectedSeat.column === column;

            return (
              <Seat
                key={index}
                row={row}
                column={column}
                status={seat?.status}
                onSelect={handleSeatSelect}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      ))}
  </div>
  );
}

export default SeatMap;