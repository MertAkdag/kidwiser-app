import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { theme } from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export interface FilterState {
  location: string;
  category: string;
  date: string;
  priceRange: {
    min: number;
    max: number;
  };
}

interface SearchFilterProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  currentFilters: FilterState;
}

const CATEGORIES = [
  { id: 'all', label: 'Tümü', icon: null },
  { id: 'music', label: 'Müzik', icon: 'music' },
  { id: 'child', label: 'El işi', icon: 'triangle-square-circle' },
  { id: 'sport', label: 'Spor', icon: 'brand-dribbble' },
];


export default function SearchFilter({
  visible,
  onClose,
  onApply,
  currentFilters,
}: SearchFilterProps) {
  const { calculateWidth, calculateHeight, calculateFontSize } = useResponsive();

  const [filters, setFilters] = useState<FilterState>(currentFilters);
  const [selectedCategory, setSelectedCategory] = useState(currentFilters.category);
  const [priceValues, setPriceValues] = useState([
    currentFilters.priceRange.min,
    currentFilters.priceRange.max,
  ]);


  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const [tempDate, setTempDate] = useState(new Date());


  const handlePriceChange = (values: number[]) => {
    setPriceValues(values);
    setFilters(prev => ({
      ...prev,
      priceRange: { min: values[0], max: values[1] },
    }));
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setFilters(prev => ({
      ...prev,
      category: categoryId,
    }));
  };
  
  const handleDateChange = (event: any, date?: Date) => {
    if (Platform.OS === 'android') {
        setShowDatePicker(false);
        if (date && event.type === 'set') {
            updateDateFilter(date);
        }
    } else {
        if (date) {
            setTempDate(date);
        }
    }
  };

  const updateDateFilter = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setFilters(prev => ({
      ...prev,
      date: formattedDate,
    }));
  }

  const confirmDate = () => {
    updateDateFilter(tempDate);
    setShowDatePicker(false);
  };
  
  const cancelDate = () => {
    setTempDate(selectedDate);
    setShowDatePicker(false);
  };


  const handleDatePress = () => {
    setTempDate(selectedDate);
    setShowDatePicker(true);
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      location: 'Antalya',
      category: 'all',
      date: '',
      priceRange: { min: 40, max: 120 },
    };
    setFilters(resetFilters);
    setSelectedCategory('all');
    setPriceValues([40, 120]);
    setSelectedDate(new Date());
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const renderCategoryButton = (category: any) => {
    const isSelected = selectedCategory === category.id;
    return (
      <TouchableOpacity
        key={category.id}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: calculateWidth(16),
          height: calculateHeight(32),
          borderRadius: calculateWidth(8),
          backgroundColor: isSelected ? theme.colors.primary[500] : theme.colors.greyscale[100],
          marginRight: calculateWidth(12),
          justifyContent: 'center',
        }}
        onPress={() => handleCategorySelect(category.id)}
        activeOpacity={0.8}
      >
        {category.icon && (
          <Icon
            name={category.icon}
            size={16}
            color={isSelected ? theme.colors.white : theme.colors.greyscale[600]}
            style={{ marginRight: calculateWidth(6) }}
          />
        )}
        <Text
          style={{
            fontSize: calculateFontSize(14),
            fontWeight: '500',
            color: isSelected ? theme.colors.white : theme.colors.greyscale[600],
            fontFamily: 'SFProDisplay-Medium',
          }}
        >
          {category.label}
        </Text>
      </TouchableOpacity>
    );
  };
  
  const CustomMarker = () => {
    return (
      <View
        style={{
          width: calculateWidth(40),
          height: calculateWidth(40),
          backgroundColor: theme.colors.primary[500],
          
          borderRadius: calculateWidth(20),
          borderWidth: 2,
          borderColor: theme.colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: theme.colors.primary[500],
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 8,
          transform: [{ translateY: -calculateHeight(1) }]
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: calculateWidth(-5)}}>
          <Icon name="chevron-left" size={20} color={theme.colors.white} />
          <Icon name="chevron-right" size={20} color={theme.colors.white} />

        </View>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity 
          style={{ 
            height: '81%', 
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: calculateWidth(32),
            borderTopRightRadius: calculateWidth(32),
          }}
          activeOpacity={1}
        >
          <SafeAreaView style={{ flex: 1 }}>
             <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: calculateWidth(24),
                paddingVertical: calculateHeight(16),
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.greyscale[100],
                position: 'relative',
              }}
            >

              <View
                style={{
                  position: 'absolute',
                  top: calculateHeight(8),
                  width: calculateWidth(36),
                  height: calculateHeight(4),
                  backgroundColor: theme.colors.greyscale[300],
                  borderRadius: calculateWidth(2),
                }}
              />


              <Text
                style={{
                  fontSize: calculateFontSize(20),
                  fontWeight: '600',
                  color: theme.colors.greyscale[900],
                  fontFamily: 'SFProDisplay-Medium',
                  marginTop: calculateHeight(8),
                }}
              >
                Filtrele
              </Text>
            </View>


            <ScrollView
              style={{ 
                flex: 1,
              }}
              contentContainerStyle={{
                paddingHorizontal: calculateWidth(24),
                paddingVertical: calculateHeight(24),
              }}
            >

              <View style={{ marginBottom: calculateHeight(24) }}>
                                  <Text
                    style={{
                      fontSize: calculateFontSize(18),
                      fontWeight: '600',
                      color: theme.colors.greyscale[900],
                      fontFamily: 'SFProDisplay-Medium',
                      marginBottom: calculateHeight(12),
                    }}
                  >
                    Konum
                  </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: theme.colors.white,
                    borderRadius: calculateWidth(16),
                    borderWidth: 1,
                    borderColor: theme.colors.greyscale[200],
                    paddingHorizontal: calculateWidth(16),
                    paddingVertical: calculateHeight(16),
                    height: calculateHeight(56),
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: calculateFontSize(16),
                      color: theme.colors.greyscale[600],
                      fontFamily: 'SFProDisplay-Medium',
                    }}
                  >
                    {filters.location}
                  </Text>
                  <Icon
                    name="map-pin-outline"
                    size={24}
                    color={theme.colors.primary[500]}
                  />
                </TouchableOpacity>
              </View>


              <View style={{ marginBottom: calculateHeight(20) }}>
                                  <Text
                    style={{
                      fontSize: calculateFontSize(18),
                      fontWeight: '600',
                      color: theme.colors.greyscale[900],
                      fontFamily: 'SFProDisplay-Medium',
                      marginBottom: calculateHeight(12),
                    }}
                  >
                    Kategori
                  </Text>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: calculateWidth(4),
                  }}
                >
                  {CATEGORIES.map((category) => renderCategoryButton(category))}
                </ScrollView>
              </View>


              <View style={{ marginBottom: calculateHeight(20) }}>
                                  <Text
                    style={{
                      fontSize: calculateFontSize(18),
                      fontWeight: '600',
                      color: theme.colors.greyscale[900],
                      fontFamily: 'SFProDisplay-Medium',
                      marginBottom: calculateHeight(12),
                    }}
                  >
                    Tarih
                  </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: theme.colors.white,
                    borderRadius: calculateWidth(16),
                    borderWidth: 1,
                    borderColor: theme.colors.greyscale[200],
                    paddingHorizontal: calculateWidth(16),
                    paddingVertical: calculateHeight(16),
                    height: calculateHeight(56),
                  }}
                  onPress={handleDatePress}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: calculateFontSize(16),
                      color: filters.date ? theme.colors.greyscale[900] : theme.colors.greyscale[500],
                      fontFamily: 'SFProDisplay-Medium',
                    }}
                  >
                    {filters.date || 'Tarih Seçin'}
                  </Text>
                  <Icon
                    name="calendar"
                    size={20}
                    color={theme.colors.primary[500]}
                  />
                </TouchableOpacity>
              </View>
              
              <View style={{ marginBottom: calculateHeight(20) }}>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: calculateHeight(16),
                  }}
                >
                  <Text
                    style={{
                      fontSize: calculateFontSize(18),
                      fontWeight: '600',
                      color: theme.colors.greyscale[900],
                      fontFamily: 'SFProDisplay-Medium',
                    }}
                  >
                    Fiyat Aralığı
                  </Text>
                  <Text
                    style={{
                      fontSize: calculateFontSize(16),
                      fontWeight: '500',
                      color: theme.colors.primary[500],
                      fontFamily: 'SFProDisplay-Medium',
                    }}
                  >
                    ₺{priceValues[0]} - ₺{priceValues[1]}
                  </Text>
                </View>

                <View
                  style={{
                    height: calculateHeight(100),
                    alignItems: 'center',
                  }}
                >

                <View
                  style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '100%',
                    bottom: calculateHeight(48),
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => {
                    const barHeights = [15, 29, 34, 38, 44, 50, 55, 60, 44, 30];
                    return (
                      <View
                        key={i}
                        style={{
                          width: calculateWidth(16),
                          height: calculateHeight(barHeights[i]),
                          backgroundColor: theme.colors.greyscale[100],
                          borderRadius: calculateWidth(4),
                          marginRight: i < 9 ? calculateWidth(8) : 0,
                        }}
                      />
                    );
                  })}
                  </View>
                  
                  <MultiSlider
                    values={priceValues}
                    onValuesChange={handlePriceChange}
                    min={40}
                    max={120}
                    step={1}
                    sliderLength={calculateWidth(327)}
                    containerStyle={{ height: calculateHeight(40), marginTop: calculateHeight(28) }}
                    trackStyle={{
                      height: calculateHeight(6),
                      backgroundColor: theme.colors.greyscale[200],
                      borderRadius: calculateWidth(3),
                    }}
                    selectedStyle={{
                      backgroundColor: theme.colors.primary[500],
                    }}
                    customMarker={CustomMarker}
                    customMarkerLeft={CustomMarker}
                    customMarkerRight={CustomMarker}
                    isMarkersSeparated={true}
                    allowOverlap={false}
                    minMarkerOverlapDistance={10}
                  />
                </View>
              </View>
            </ScrollView>


            <View
              style={{
                paddingHorizontal: calculateWidth(24),
                paddingVertical: calculateHeight(20),
                borderTopWidth: 1,
                borderTopColor: theme.colors.greyscale[100],
              }}
            >
              <Button
                title="Filtrele"
                variant="primary"
                fullWidth
                style={{
                  height: calculateHeight(56),
                }}
                onPress={handleApply}
              />
            </View>
          </SafeAreaView>
        </TouchableOpacity>
      </TouchableOpacity>
      
      {showDatePicker && (
        Platform.OS === 'ios' ? (
          <View style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: theme.colors.white,
            borderTopWidth: 1,
            borderTopColor: theme.colors.greyscale[200]
          }}>
             <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: calculateWidth(16),
                paddingVertical: calculateHeight(12),
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.greyscale[100]
             }}>
                <TouchableOpacity onPress={cancelDate}>
                    <Text style={{ fontSize: calculateFontSize(16), color: theme.colors.greyscale[600] }}>İptal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={confirmDate}>
                    <Text style={{ fontSize: calculateFontSize(16), fontWeight: 'bold', color: theme.colors.primary[500] }}>Seç</Text>
                </TouchableOpacity>
             </View>
            <DateTimePicker
              value={tempDate}
              mode="date"
              display="spinner" 
              onChange={handleDateChange}
              minimumDate={new Date()}
            />
          </View>
        ) : (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
            minimumDate={new Date()}
          />
        )
      )}
    </Modal>
  );
}